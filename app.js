const express = require("express");
const path = require("path");
const morgan = require("morgan");
const app = express();

const indexRouter = require("./routes/");
const frontendRouter = require("./routes/frontend");
const backendRouter = require("./routes/backend");

const { getNotFoundPage } = require("./controllers/");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/frontend", frontendRouter);
app.use("/backend", backendRouter);

app.use(getNotFoundPage);

module.exports = app;
