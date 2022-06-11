const mongoose =require("mongoose");

const healthh = new mongoose.Schema({
    message:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model("health", healthh);