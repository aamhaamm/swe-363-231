const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/Contact", (req, res) => {
  res.sendFile(path.join(__dirname, "Contact.html"));
});

module.exports = router;