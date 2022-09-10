const Health = require("../../models/schema.js");
const updateHealth = async (req, res) => {
  try {
    const health = await Health.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        health,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
    });
  }
};
module.exports = updateHealth;