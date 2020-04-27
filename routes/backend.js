const express = require("express");
const router = express.Router();
const { getBackendPage } = require("../controllers");

router.get("/", getBackendPage);

module.exports = router;
