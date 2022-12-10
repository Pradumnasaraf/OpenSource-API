const Health = require("../../models/schema.js");
const getHealthById = async (req, res) => {
  try {
    const health = await Health.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        health,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "Either the id is invalid or the health advice is not found",
    });
  }
};
module.exports = getHealthById;
