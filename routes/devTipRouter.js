const express = require("express");
const router = express.Router();
const getDevTip = require("../controller/devtip/getDevTip.js");
const postDevTip = require("../controller/devtip/postDevTip.js");
const updateDevTip = require("../controller/devtip/updateDevTip.js");
const deleteDevTip = require("../controller/devtip/deleteDevTip.js");
const getDevTipById = require("../controller/devtip/getDevTipById.js");

router.get("/", getDevTip);
router.post("/", postDevTip);
router.delete("/", deleteDevTip);
router.patch("/:id", updateDevTip);
router.get("/:id", getDevTipById);
router.delete("/:id", deleteDevTip);

module.exports = router;
