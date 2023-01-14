const DevTip = require("../../models/devTipShhema.js");
const getDevTipByID = async (req, res) => {
  try {
    const devTip = await DevTip.findById(req.params.id);
    res.status(200).json({
      summary: "success",
      data: {
        devtip: devTip,
      },
    });
  } catch (e) {
    res.status(400).json({
      summary: "either the id is invalid or the dev tip is not found",
    });
  }
};
module.exports = getDevTipByID;
