const Health = require("../../models/schema.js");
const postHealth = async (req, res) => {
  const newHealth = new Health({
    message: req.body.message,
  });
  try {
    await newHealth.save();
    res.json(newHealth);
  } catch {
    res.json({ message: "Not found, try something new" });
  }
};
module.exports = postHealth;
