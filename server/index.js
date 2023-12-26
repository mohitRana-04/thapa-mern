const express = require("express");
const app = express();

const router = require("../router/auth-router");

app.use("/api/auth", router);

// app.get("/", (req, res) => {
//   res.status(200).send("Welcome to world best series");
// });

// app.get("/register", (req, res) => {
//   res.status(200).send("Welcome to regsiter page");
// });

const PORT = 5000;
app.listen(PORT, () => {
  console.log("App is listening");
});
