const mongoose = require("mongoose");

const health = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("health", health);
