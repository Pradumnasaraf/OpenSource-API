const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/router.js")
const logger = require("./middleware/logger.js")
const ErrorHandle = require("./middleware/404.js")
const path = require("path");
require("dotenv").config();
const app = express();

app.use(express.static(path.join(__dirname, "./public")));
app.use(express.json());
app.use(logger);
app.use("/api/health", router);
app.use(ErrorHandle);

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("successfully connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

PORT = process.PORT || 9002;
app.listen(PORT, () =>
  console.log(`Server is LIVE on -> http://localhost:${PORT}`)
);
