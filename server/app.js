const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("Hello from Khati Server");
});

module.exports = app;
