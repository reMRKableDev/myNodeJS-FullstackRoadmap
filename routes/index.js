/** Express router rendering the landing page
 * @module routes/index
 * @requires express
 */

/**
 * @const  express          Express dependency
 * @const router            Initializing Express.Router()
 * @const getLandingPage    Controller that renders landing page
 */
const express = require("express");
const router = express.Router();
const { getLandingPage } = require("../controllers");

/**
 * @name .get()
 * @function
 * @param {string} path         URL endpoint
 * @param {callback} controller Route controller & express middleware
 */
router.get("/", getLandingPage);

module.exports = router;
