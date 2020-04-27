const express = require("express");
const router = express.Router();
const { getFrontendPage } = require("../controllers");

router.get("/", getFrontendPage);

module.exports = router;
