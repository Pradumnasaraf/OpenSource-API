const DevTip = require("../../models/devTip.js");
const getDevTip = async (req, res) => {
  try {
    const devTip = await DevTip.find();
    res.status(200).json({
      status: "success",
      results: devTip.length,
      data: {
        devtip: devTip,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "Dev Tips not found",
    });
  }
};
module.exports = getDevTip;
