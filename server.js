const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public'));

// app.use("/", require("./app/routing/htmlRoutes"));
// app.use("/api/friends", require("./app/routing/apiRoutes"));

require("./app/routing/htmlRoutes")(app);
// app.use("/survey", require("./app/routing/htmlRoutes"));
require("./app/routing/apiRoutes")(app);




app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});