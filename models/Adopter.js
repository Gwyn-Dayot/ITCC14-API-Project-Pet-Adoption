import mongoose from "mongoose";

const adopterSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
  contactNo: String
});

export default mongoose.model("Adopter", adopterSchema);