import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

import animalRoutes from "./routes/animalRoutes.js";
import adopterRoutes from "./routes/adopterRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/animals", animalRoutes);
app.use("/adopters", adopterRoutes);
app.use("/users", userRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});