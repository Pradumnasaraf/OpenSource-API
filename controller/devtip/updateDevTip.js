const DevTip = require("../../models/devTipSchema.js");
const updateDevTip = async (req, res) => {
  try {
    if (!req.body.message) {
      return res.status(400).json({
        summary: "please provide a dev tip, message is empty.",
      });
    }
    const devTip = await DevTip.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      summary: "your data has been updated!",
      data: {
        devtip: devTip,
      },
    });
  } catch (e) {
    res.status(400).json({
      summary:
        "unable to update the dev tip, either the id is invalid or the dev tip is not found",
    });
  }
};
module.exports = updateDevTip;
