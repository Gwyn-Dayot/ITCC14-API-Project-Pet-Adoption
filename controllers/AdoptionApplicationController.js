import Application from "../models/Application.js";

export const getApplications = async (req, res) => {
  try {
    const apps = await Application.find();
    res.status(200).json(apps);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addApplication = async (req, res) => {
  try {
    const newApp = new Application(req.body);
    await newApp.save();
    res.status(201).json(newApp);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getApplicationById = async (req, res) => {
  try {
    const app = await Application.findById(req.params.applicationId);
    if (!app) return res.status(404).json({ message: "Not found" });
    res.status(200).json(app);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

export const updateApplication = async (req, res) => {
  try {
    const updated = await Application.findByIdAndUpdate(req.params.applicationId, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Not found" });
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteApplication = async (req, res) => {
  try {
    const removed = await Application.findByIdAndDelete(req.params.applicationId);
    if (!removed) return res.status(404).json({ message: "Not found" });
    res.status(200).json({ message: "Successfully deleted" });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};