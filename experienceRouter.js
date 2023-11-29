const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/Experience", (req, res) => {
  res.sendFile(path.join(__dirname, "Experience.html"));
});

module.exports = router;