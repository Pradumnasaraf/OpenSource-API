const Health = require("../../models/schema.js");
const postHealth = async (req, res) => {
  try {
    const health = await Health.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        health,
      },
    });
  } catch (e) {
    console.log(e);
    res.status(400).json({
      status: "fail",
    });
  }
};
module.exports = postHealth;
