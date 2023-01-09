const DevTip = require("../../models/devTip.js");
const getDevTipByID = async (req, res) => {
  try {
    const devTip = await DevTip.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        devtip: devTip,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "Either the id is invalid or the Dev Tip is not found",
    });
  }
};
module.exports = getDevTipByID;
