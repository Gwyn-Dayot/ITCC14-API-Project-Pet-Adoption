import Appointment from "../models/Appointment.js";

export const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addAppointment = async (req, res) => {
  try {
    const newApp = new Appointment(req.body);
    await newApp.save();
    res.status(201).json(newApp);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getAppointmentById = async (req, res) => {
  try {
    const app = await Appointment.findById(req.params.appointmentId);
    if (!app) return res.status(404).json({ message: "Not found" });
    res.status(200).json(app);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

export const updateAppointment = async (req, res) => {
  try {
    const updated = await Appointment.findByIdAndUpdate(req.params.appointmentId, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Not found" });
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteAppointment = async (req, res) => {
  try {
    const removed = await Appointment.findByIdAndDelete(req.params.appointmentId);
    if (!removed) return res.status(404).json({ message: "Not found" });
    res.status(200).json({ message: "Successfully deleted" });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};