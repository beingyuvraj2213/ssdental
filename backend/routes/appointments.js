import express from "express";
import Appointment from "../models/Appointment.js";
import { sendAppointmentWhatsApp } from "../utils/whatsapp.js";

const router = express.Router();

// POST /api/appointments - patient books an appointment
router.post("/", async (req, res) => {
  try {
    const { name, phone, service, preferredDate, preferredTime } = req.body;

    if (!name || !phone || !service || !preferredDate || !preferredTime) {
      return res.status(400).json({
        success: false,
        message: "Please fill in your name, phone, service, and preferred date & time.",
      });
    }

    const appointment = await Appointment.create(req.body);

    // Fire-and-forget WhatsApp alert to the clinic owner
    sendAppointmentWhatsApp(appointment).catch((e) =>
      console.error("WhatsApp notify error:", e)
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
  const appointments = await Appointment.find().sort({ createdAt: -1 });
  return res.json({ success: true, appointments });
});

export default router;
