import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  adopterId: { type: mongoose.Schema.Types.ObjectId, ref: "Adopter" },
  animalId: { type: mongoose.Schema.Types.ObjectId, ref: "Animal" },
  dateApplied: { type: Date, default: Date.now },
  status: { type: String, default: "Pending" }
});

export default mongoose.model("Application", applicationSchema);