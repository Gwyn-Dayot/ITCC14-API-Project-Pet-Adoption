import express from "express";
import {
  getAdopters,
  addAdopter,
  getAdopterById,
  updateAdopter,
  deleteAdopter
} from "../controllers/adopterController.js";

const router = express.Router();

router.get("/", getAdopters);
router.post("/", addAdopter);
router.get("/:adopterId", getAdopterById);
router.patch("/:adopterId", updateAdopter);
router.delete("/:adopterId", deleteAdopter);

export default router;