const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const logger = require("./middleware/logger.js");
const ErrorHandle = require("./middleware/404.js");
const devTipRouter = require("./routes/devTipRouter.js");
const { MONGODB_URL, PORT } = require("./config/config.js");
const app = express();

// eslint-disable-next-line no-undef
app.use(express.static(path.join(__dirname, "./public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);
app.use("/api/devtip", devTipRouter);
app.use(ErrorHandle);

mongoose.set("strictQuery", false);
mongoose
  // eslint-disable-next-line no-undef
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

// eslint-disable-next-line no-undef
app.listen(PORT, () =>
  console.log(`Server is LIVE at -> http://localhost:${PORT}`)
);

module.exports = app;
