const Health = require("../../models/schema.js");
const getHealth = async (req, res) => {
  try {
    res.json(await Health.find());
  } catch {
    console.log({ message: "Not found, try something new" });
  }
};
module.exports = getHealth;
