const mongoose = require("mongoose");

const devtip = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("devtip", devtip);
