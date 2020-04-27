/** Express router rendering the landing page
 * @module routes/backend
 * @requires express
 */

/**
 * @const express           Express dependency
 * @const router            Initializing Express.Router()
 * @const getBackendPage   Controller that renders backend page
 */
const express = require("express");
const router = express.Router();
const { getBackendPage } = require("../controllers");

/**
 * @name .get()
 * @function
 * @param {string} path         URL endpoint
 * @param {callback} controller Route controller & express middleware
 */
router.get("/", getBackendPage);

module.exports = router;
