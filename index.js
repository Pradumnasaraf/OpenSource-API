const express = require("express");
const mongoose = require("mongoose");
const devTipRouter = require("./routes/devTipRouter.js");
const logger = require("./middleware/logger.js");
const ErrorHandle = require("./middleware/404.js");
const path = require("path");
require("dotenv").config();
const app = express();

// eslint-disable-next-line no-undef
app.use(express.static(path.join(__dirname, "./public")));
app.use(express.json());
app.use(logger);
app.use("/api/devtip", devTipRouter);
app.use(ErrorHandle);

mongoose.set("strictQuery", false);
mongoose
  // eslint-disable-next-line no-undef
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 9009;
app.listen(PORT, () =>
  console.log(`Server is LIVE on -> http://localhost:${PORT}`)
);

module.exports = app;
