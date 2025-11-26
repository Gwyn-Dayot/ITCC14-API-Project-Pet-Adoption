import Adopter from "../models/Adopter.js";

export const getAdopters = async (req, res) => {
  try {
    const adopters = await Adopter.find();
    res.status(200).json(adopters);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addAdopter = async (req, res) => {
  try {
    const adopter = new Adopter(req.body);
    await adopter.save();
    res.status(201).json(adopter);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getAdopterById = async (req, res) => {
  try {
    const adopter = await Adopter.findById(req.params.adopterId);
    if (!adopter) return res.status(404).json({ message: "Not found" });
    res.status(200).json(adopter);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

export const updateAdopter = async (req, res) => {
  try {
    const updated = await Adopter.findByIdAndUpdate(
      req.params.adopterId,
      req.body,
      { new: true }
    );

    if (!updated) return res.status(404).json({ message: "Not found" });

    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteAdopter = async (req, res) => {
  try {
    const removed = await Adopter.findByIdAndDelete(req.params.adopterId);
    if (!removed) return res.status(404).json({ message: "Not found" });

    res.status(200).json({ message: "Successfully deleted" });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};