const express = require("express");
const path = require('path')
const app = express();

app.use('/', require('./Router/router.js'))

PORT = process.PORT || 3000
app.listen(PORT, () => console.log(`Server is running on the PORT: ${PORT}`))