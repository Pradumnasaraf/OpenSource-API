const DevTip = require("../../models/devTip.js");
const updateDevTip = async (req, res) => {
  try {
    const devTip = await DevTip.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "Your data has been updated!",
      data: {
        devtip: devTip,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
    });
  }
};
module.exports = updateDevTip;
