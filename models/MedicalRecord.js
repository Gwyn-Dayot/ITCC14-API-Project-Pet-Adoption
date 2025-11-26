import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({
  animalId: { type: mongoose.Schema.Types.ObjectId, ref: "Animal" },
  recordDate: { type: Date, default: Date.now },
  recordType: String,
  description: String
});

export default mongoose.model("MedicalRecord", medicalRecordSchema);