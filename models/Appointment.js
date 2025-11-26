import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  adopterId: { type: mongoose.Schema.Types.ObjectId, ref: "Adopter" },
  animalId: { type: mongoose.Schema.Types.ObjectId, ref: "Animal" },
  scheduleDate: Date,
  status: { type: String, default: "Scheduled" },
  purpose: String
});

export default mongoose.model("Appointment", appointmentSchema);