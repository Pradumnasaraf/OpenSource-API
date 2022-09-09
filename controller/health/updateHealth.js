const Health = require("../../models/schema.js");
const updateHealth = async (req, res) => {
  try {
    const healthMessage = await Health.findById(req.params.id);
    healthMessage.message = req.body.message;
    await healthMessage.save();
    res.json(healthMessage);
  } catch {
    res.json({ message: "Not found, try something new" });
  }
}
module.exports = updateHealth;