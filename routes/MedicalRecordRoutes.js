import express from 'express';
import {
    getMedicalRecords,
    addMedicalRecord,
    getMedicalRecordById,
    updateMedicalRecord,
    deleteMedicalRecord
} from '../controllers/MedicalRecordController.js';

const router = express.Router();

router.get('/', getMedicalRecords);
router.post('/', addMedicalRecord);
router.get('/:recordId', getMedicalRecordById);
router.patch('/:recordId', updateMedicalRecord);
router.delete('/:recordId', deleteMedicalRecord);

export default router;