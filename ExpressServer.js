const express = require("express");
const app = express();
const port = 3000;

// Routers
const mainRouter = require("./mainRouter");
const contactRouter = require("./contactRouter");
const experienceRouter = require("./experienceRouter");

// Middleware to handle form submissions with URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Middleware to handle the form submission
app.post('/submit-form', (req, res) => {
  // req.body will contain the form data from the request
  console.log(req.body);

  // Process the form data here
  // ...

  // Send a response to the client
  res.send('Form submission processed.');
});

// Use the routers
app.use("/", mainRouter);
app.use("/", contactRouter);
app.use("/", experienceRouter);

// Listen on the configured port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
