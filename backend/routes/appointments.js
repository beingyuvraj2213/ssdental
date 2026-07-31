import express from "express";
import Appointment from "../models/Appointment.js";
import { sendAppointmentTelegram } from "../utils/telegram.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, phone, service, preferredDate, preferredTime } = req.body;

    if (!name || !phone || !service || !preferredDate || !preferredTime) {
      return res.status(400).json({
        success: false,
        message: "Please fill in your name, phone, service, and preferred date & time.",
      });
    }

    let appointment = null;

    try {
      appointment = await Appointment.create(req.body);
    } catch (dbErr) {
      console.warn("MongoDB save failed, continuing without persistence:", dbErr.message);
      appointment = { ...req.body, _id: "offline" };
    }

    // Fire-and-forget Telegram alert to the clinic owner
    sendAppointmentTelegram(appointment).catch((e) =>
      console.error("Telegram notify error:", e)
    );

    return res.status(201).json({
      success: true,
      message: "Appointment received! We'll call you soon to confirm.",
      appointment,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while booking your appointment. Please try again.",
    });
  }
});

// GET /api/appointments - clinic admin view (protected with a simple key)
router.get("/", async (req, res) => {
  const key = req.header("x-admin-key");
  if (!key || key !== process.env.ADMIN_KEY) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    return res.json({ success: true, appointments });
  } catch (dbErr) {
    console.warn("MongoDB query failed:", dbErr.message);
    return res.json({ success: true, appointments: [], message: "MongoDB is unavailable right now." });
  }
});

router.get("/test-telegram", async (req, res) => {
  try {
    const response = await fetch("https://api.telegram.org");

    res.json({
      success: true,
      status: response.status,
      message: "Telegram reachable",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

export default router;
