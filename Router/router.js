const express = require("express")
const router = express.Router()

router.get('/', (req, res) =>{
    res.send("This is Home Page.")
})

router.get('/api', (req, res) =>{
    res.send("<h2>Welcome to Open API - A Open Source, free, and public API for learning..</h2>")
})

router.get('/api/health', (req, res) =>{
    res.json({message: "Evething is working fine!"})
})

module.exports = router;