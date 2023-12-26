const express = require("express");
const router = express.Router();

// router.get("/", (req, res) => {
//   res.status(200).send("Welcome to This channel");
// });

router.route("/").get((req, res) => {
  res.status(200).send("Welcome to This channel");
});

router.route("/register").get((req, res) => {
  res.status(200).send("Welcome to Register Page");
});

module.exports = router;
