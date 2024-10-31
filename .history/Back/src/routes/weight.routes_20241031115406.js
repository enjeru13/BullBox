// routes/weight.js
const express = require("express");
const Weight = require("../models/weight.model");
const router = express.Router();

// Agregar peso
router.post("/", async (req, res) => {
  const { userId, weight } = req.body;

  const newWeight = new Weight({ userId, weight });

  try {
    await newWeight.save();
    res.status(201).json(newWeight);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Obtener pesos por usuario
router.get("/:userId", async (req, res) => {
  try {
    const weights = await Weight.find({ userId: req.params.userId }).sort({
      date: -1,
    });
    res.json(weights);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
