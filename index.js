const express = require('express');
const fs = require('fs');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yaml');

const app = express();
app.use(express.json());

// Load Swagger (openapi.yaml)
const openapi = YAML.parse(fs.readFileSync('./openapi.yaml', 'utf8'));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(openapi));

// Pretend database (just an array)
let pets = [
  { id: "1", name: "Mochi", species: "dog", age: 2, adopted: false },
  { id: "2", name: "Nori", species: "cat", age: 1, adopted: false },
];

// Routes
app.get('/pets', (req, res) => res.json(pets));

app.post('/pets', (req, res) => {
  const { name, species, age } = req.body;
  const id = String(Date.now());
  const newPet = { id, name, species, age, adopted: false };
  pets.push(newPet);
  res.status(201).json(newPet);
});

app.get('/pets/:id', (req, res) => {
  const pet = pets.find(p => p.id === req.params.id);
  if (!pet) return res.status(404).json({ message: 'Pet not found' });
  res.json(pet);
});

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
  console.log(`📘 Swagger docs available at http://localhost:${port}/docs`);
});
