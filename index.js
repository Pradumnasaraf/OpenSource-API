const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config(); 
const app = express();

app.use(express.static('public'))
app.use(require('./middleware/logger.js'))
app.use(express.json())
app.use(require('./routes/router.js'))
app.use(require('./middleware/404.js'))


mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

PORT = process.PORT || 9004
app.listen(PORT, () => console.log(`Server is live on: http://localhost:${PORT}`))
