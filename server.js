import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import petRoutes from './routes/pets.js';
import userRoutes from './routes/users.js';
import adoptionRoutes from './routes/adoptions.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/pets', petRoutes);
app.use('/api/users', userRoutes);
app.use('/api/adoptions', adoptionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});