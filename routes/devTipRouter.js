import express from "express";
const router = express.Router();

import getDevTip from "../controller/devtip/getDevTip.js";
import postDevTip from "../controller/devtip/postDevTip.js";
import updateDevTip from "../controller/devtip/updateDevTip.js";
import deleteDevTip from "../controller/devtip/deleteDevTip.js";
import getDevTipById from "../controller/devtip/getDevTipById.js";

router.get("/", getDevTip);
router.post("/", postDevTip);
router.delete("/", deleteDevTip);
router.patch("/:id", updateDevTip);
router.get("/:id", getDevTipById);
router.delete("/:id", deleteDevTip);

export default router;
