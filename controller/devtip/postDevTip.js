const DevTip = require("../../models/devTip.js");
const postDevTip = async (req, res) => {
  try {
    const devTip = await DevTip.create(req.body);
    res.status(200).json({
      status: "Your data has been saved!",
      data: {
        devtip: devTip,
      },
    });
  } catch (e) {
    console.log(e);
    res.status(400).json({
      status: "fail",
    });
  }
};
module.exports = postDevTip;
