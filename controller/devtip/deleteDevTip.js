const DevTip = require("../../models/devTip.js");
const deleteDevTip = async (req, res) => {
  try {
    await DevTip.findByIdAndDelete(req.params.id);
    res.json({ message: "Data has been deleted!" });
  } catch (e) {
    res.status(400).json({
      status: "fail",
    });
  }
};
module.exports = deleteDevTip;
