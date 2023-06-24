import DevTip from "../../models/devTipSchema.js";
const deleteDevTip = async (req, res) => {
  try {
    await DevTip.findByIdAndDelete(req.params.id);
    res.json({ summary: "data has been deleted" });
  } catch (e) {
    res.status(400).json({
      summary:
        "unable to delete the dev tip, either the id is invalid or the Dev Tip is not found",
    });
  }
};
export default deleteDevTip;
