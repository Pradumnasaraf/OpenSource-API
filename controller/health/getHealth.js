const Health = require("../../models/schema.js");
const getHealth = async (req, res) => {
  try {
    const healths = await Health.find();
    res.status(200).json({
      status: "success",
      results: healths.length,
      data: {
        healths,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
    });
  }
};
module.exports = getHealth;
