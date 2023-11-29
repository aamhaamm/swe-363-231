const express = require("express");
const app = express();
const port = 3000;

const mainRouter = require("./mainRouter");
const contactRouter = require("./contactRouter");
const experienceRouter = require("./experienceRouter");

app.use(express.static("./"));

// Use the routers
app.use("/", mainRouter);
app.use("/", contactRouter);
app.use("/", experienceRouter);

// Listen on the configured port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});