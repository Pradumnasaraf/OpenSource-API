const express = require("express");
const router = express.Router();
const getHealth = require("../controller/health/getHealth.js");
const postHealth = require("../controller/health/postHealth.js");
const updateHealth = require("../controller/health/updateHealth.js");
const deleteHealth = require("../controller/health/deleteHealth.js");
const getHealthById = require("../controller/health/getHealthById.js");

router.get("/", getHealth);
router.post("/", postHealth);
router.delete("/", deleteHealth);
router.patch("/:id", updateHealth);
router.get("/:id", getHealthById);
router.delete("/:id", deleteHealth);

module.exports = router;
