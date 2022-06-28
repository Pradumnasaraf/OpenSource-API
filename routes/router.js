const express = require("express");
const router = express.Router();
const Health = require("../models/schema.js");
const notFoundMsg = { message: "Not found, try something new" };

router.get("/api", (req, res) => {
  res.send(
    "Welcome to Open API - An Open Source, free, and public API for learning.."
  );
});

router.get("/api/health", async (req, res) => {
  try {
    res.json(await Health.find());
  } catch {
    console.log(notFoundMsg);
  }
});

router.get("/api/health/:id", async (req, res) => {
  try {
    const h1 = await Health.findById(req.params.id);
    res.json(h1);
  } catch {
    res.status(404).json(notFoundMsg);
  }
});

router.post("/api/health", async (req, res) => {
  const newHealth = new Health({
    message: req.body.message,
  });
  try {
    await newHealth.save();
    res.json(newHealth);
  } catch {
    res.json(notFoundMsg);
  }
});
router.put("/api/health/:id", async (req, res) => {
  try {
    const healthMessage = await Health.findById(req.params.id);
    healthMessage.message = req.body.message;
    await healthMessage.save();
    res.json(healthMessage);
  } catch {
    res.json(notFoundMsg);
  }
});
router.delete("/api/health/:id", async (req, res) => {
  try {
    const healthMessage = await Health.findById(req.params.id);
    await healthMessage.deleteOne();
    res.json({ message: "Data Deleted" });
  } catch {
    res.json(notFoundMsg);
  }
});

module.exports = router;
