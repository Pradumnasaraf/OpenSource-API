const express = require("express")
const router = express.Router()

router.get('/', (req, res) =>{
    res.send("Welcome to the Homepage.")
})

router.get('/api', (req, res) =>{
    res.send("<p>Welcome to Open API - A Open Source, free, and public API for learning..</p>")
})

router.get('/api/health', (req, res) =>{
    res.json({tip: "Eat plenty of fresh, non-processed foods, drink 64 ounces of water every day, and limit caffeine and alcohol intake."})
})

module.exports = router;