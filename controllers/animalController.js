import Animal from "../models/Animal.js";

// GET /animals
export const getAnimals = async (req, res) => {
  console.log("GET /animals hit");
  try {
    const animals = await Animal.find();
    console.log("Animals found:", animals);
    res.status(200).json(animals);
  } catch (err) {
    console.error("Error fetching animals:", err);
    res.status(500).json({ error: err.message });
  }
};

// POST /animals
export const addAnimal = async (req, res) => {
  console.log("POST /animals called, body:", req.body);
  try {
    const newAnimal = new Animal(req.body);
    await newAnimal.save();
    res.status(201).json(newAnimal);
  } catch (err) {
    console.error("Error adding animal:", err.message);
    res.status(400).json({ error: err.message });
  }
};

// GET /animals/:animalId
export const getAnimalById = async (req, res) => {
  try {
    const animal = await Animal.findById(req.params.animalId);
    if (!animal) return res.status(404).json({ message: "Not found" });
    res.status(200).json(animal);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

// PATCH /animals/:animalId
export const updateAnimal = async (req, res) => {
  try {
    const updated = await Animal.findByIdAndUpdate(req.params.animalId, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Not found" });
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE /animals/:animalId
export const deleteAnimal = async (req, res) => {
  try {
    const removed = await Animal.findByIdAndDelete(req.params.animalId);
    if (!removed) return res.status(404).json({ message: "Not found" });
    res.status(200).json({ message: "Successfully deleted" });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};