import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import appointmentRoutes from "./routes/appointments.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
  })
);

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    clinic: "SS Dental Health - friendly clinic",
  });
});

app.use("/api/appointments", appointmentRoutes);

const PORT = Number(process.env.PORT) || 5003;

const startServer = (port) => {
  const server = app.listen(port, () => {
    console.log(`SS Dental Health API running on port ${port}`);
  });

  server.on("error", (err) => {
    if (err.code === "EADDRINUSE" && port === PORT) {
      const fallbackPort = port + 1;
      console.warn(`Port ${port} is busy, trying ${fallbackPort} instead.`);
      startServer(fallbackPort);
    } else {
      console.error("Server startup error:", err.message);
      process.exit(1);
    }
  });
};

startServer(PORT);