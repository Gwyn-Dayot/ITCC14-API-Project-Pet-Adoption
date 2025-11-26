import MedicalRecord from "../models/MedicalRecord.js";

export const getMedicalRecords = async (req, res) => {
  try {
    const records = await MedicalRecord.find();
    res.status(200).json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addMedicalRecord = async (req, res) => {
  try {
    const newRecord = new MedicalRecord(req.body);
    await newRecord.save();
    res.status(201).json(newRecord);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getMedicalRecordById = async (req, res) => {
  try {
    const record = await MedicalRecord.findById(req.params.recordId);
    if (!record) return res.status(404).json({ message: "Not found" });
    res.status(200).json(record);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

export const updateMedicalRecord = async (req, res) => {
  try {
    const updated = await MedicalRecord.findByIdAndUpdate(req.params.recordId, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Not found" });
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteMedicalRecord = async (req, res) => {
  try {
    const removed = await MedicalRecord.findByIdAndDelete(req.params.recordId);
    if (!removed) return res.status(404).json({ message: "Not found" });
    res.status(200).json({ message: "Successfully deleted" });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};