import DevTip from "../../models/devTipSchema.js";
const postDevTip = async (req, res) => {
  try {
    if (!req.body.message) {
      return res.status(400).json({
        summary: "please provide a dev tip, message is empty.",
      });
    }
    const devTip = await DevTip.create(req.body);
    res.status(201).json({
      summary: "your dev tip has been saved",
      data: {
        devtip: devTip,
      },
    });
  } catch (e) {
    console.log(e);
    res.status(400).json({
      summary: "unable to save the dev tip",
    });
  }
};

export default postDevTip;
