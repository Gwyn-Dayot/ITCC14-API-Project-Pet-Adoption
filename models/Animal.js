import mongoose from "mongoose";

const animalSchema = new mongoose.Schema({
  name: String,
  species: String,
  breed: String,
  age: Number,
  gender: String,
  status: { type: String, default: "Available" }
});

export default mongoose.model("Animal", animalSchema);