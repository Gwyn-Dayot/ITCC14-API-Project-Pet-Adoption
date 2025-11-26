import express from "express";
import {
  getAppointments,
  addAppointment,
  getAppointmentById,
  updateAppointment,
  deleteAppointment
} from "../controllers/AppointmentController.js";

const router = express.Router();

router.get("/", getAppointments);
router.post("/", addAppointment);
router.get("/:appointmentId", getAppointmentById);
router.patch("/:appointmentId", updateAppointment);
router.delete("/:appointmentId", deleteAppointment);

export default router;