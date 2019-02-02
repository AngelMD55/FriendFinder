const path = require("path");
// route to get home.html

module.exports = function (app) {  
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

// route to get survey.html
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});
}