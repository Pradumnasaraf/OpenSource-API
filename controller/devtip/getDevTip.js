const DevTip = require("../../models/devTipShhema.js");
const getDevTip = async (req, res) => {
  try {
    const devTip = await DevTip.find();
    res.status(200).json({
      summary: "success",
      results: devTip.length,
      data: {
        devtip: devTip,
      },
    });
  } catch (e) {
    res.status(400).json({
      summary: "dev tip not found",
    });
  }
};
module.exports = getDevTip;
