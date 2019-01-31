const express = require("express");
const htmlRouter = express.Router();
const path = require("path");
// route to get home.html


htmlRouter.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

// route to get survey.html
htmlRouter.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

module.exports = htmlRouter;