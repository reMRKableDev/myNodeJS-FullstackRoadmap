/** Express router rendering the landing page
 * @module routes/frontend
 * @requires express
 */

/**
 * @const express           Express dependency
 * @const router            Initializing Express.Router()
 * @const getFrontendPage   Controller that renders frontend page
 */
const express = require("express");
const router = express.Router();
const { getFrontendPage } = require("../controllers");

/**
 * @name .get()
 * @function
 * @param {string} path         URL endpoint
 * @param {callback} controller Route controller & express middleware
 */
router.get("/", getFrontendPage);

module.exports = router;
