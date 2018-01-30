var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var path = require("path");
var app = express();


var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var db = require("./models");


var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
  });
});