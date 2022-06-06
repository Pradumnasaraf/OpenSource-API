const express = require("express")
const router = express.Router()

router.get('/', (req, res) =>{
    res.send("Welcome to the Homepage.")
})

router.get('/api', (req, res) =>{
    res.send("<h3>Welcome to Open API - A Open Source, free, and public API for learning..</h3>")
})

router.get('/api/health', (req, res) =>{
    res.json({message: "Evething is working fine!"})
})

module.exports = router;