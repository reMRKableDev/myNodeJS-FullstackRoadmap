const express = require("express");
const path = require("path");
const port = process.env.PORT || 3000;
const app = express();

const indexRouter = require("./routes/");
const frontendRouter = require("./routes/frontend");
const backendRouter = require("./routes/backend");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/frontend", frontendRouter);
app.use("/backend", backendRouter);

app.listen(port, () => console.log("Ears up on port 3000"));
