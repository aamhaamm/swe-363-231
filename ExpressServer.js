const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static("./")); // Serve static files from the root directory

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "Contact.html"));
});

// ... other routes for additional pages

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});