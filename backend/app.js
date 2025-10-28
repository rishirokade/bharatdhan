const express = require("express");
const errorHandling = require("./src/middleware/ErrorHandling");
const AppError = require("./src/utils/AppError");
const app = express();

// Connected router to app
app.use("/api/v1", require("./src/router"));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("", (req, resp, next) => {
    next(new AppError(404, "page not found"));
});

app.use(errorHandling);

module.exports = app;
