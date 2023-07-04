const express = require("express");

const app = express();

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.use("/api/v1/auth", require("./routes/authRoutes"));

module.exports = app;
