const Health = require("../../models/schema.js");
const deleteHealth = async (req, res) => {
  try {
    const healthMessage = await Health.findById(req.params.id);
    await healthMessage.deleteOne();
    res.json({ message: "Data Deleted" });
  } catch {
    res.json({ message: "Not found, try something new" });
  }
};
module.exports = deleteHealth;
