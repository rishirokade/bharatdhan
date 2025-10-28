const express = require("express");
const errorHandling = require("./middleware/ErrorHandling");
const AppError = require("./utils/AppError");
const { connectDB } = require("./config/db.config");
const app = express();
app.use(express.json({}));

connectDB();

// Connected router to app
app.use("/api/v1", require("./router"));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("", (req, resp, next) => {
    next(new AppError(404, "page not found"));
});

app.use(errorHandling);

module.exports = app;
