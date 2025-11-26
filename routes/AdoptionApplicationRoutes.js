import express from 'express';
import {
    getApplications,
    addApplication,
    getApplicationById,
    updateApplication,
    deleteApplication
} from '../controllers/AdoptionApplicationController.js';

const router = express.Router();

router.get('/', getApplications);
router.post('/', addApplication);
router.get('/:applicationId', getApplicationById);
router.patch('/:applicationId', updateApplication);
router.delete('/:applicationId', deleteApplication);

export default router;