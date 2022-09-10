const Health = require("../../models/schema.js");
const deleteHealth = async (req, res) => {
  try {
    await Health.findByIdAndDelete(req.params.id);
    res.json({ message: "Data Deleted" });
  } catch (e) {
    res.status(400).json({
      status: "fail",
    });
  }
};
module.exports = deleteHealth;
