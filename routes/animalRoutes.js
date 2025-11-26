import express from "express";
import {
  getAnimals,
  addAnimal,
  getAnimalById,
  updateAnimal,
  deleteAnimal
} from "../controllers/animalController.js";

const router = express.Router();

router.get("/", getAnimals);
router.post("/", addAnimal);
router.get("/:animalId", getAnimalById);
router.patch("/:animalId", updateAnimal);
router.delete("/:animalId", deleteAnimal);

export default router;