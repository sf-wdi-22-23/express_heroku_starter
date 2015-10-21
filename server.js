// SERVER-SIDE JAVASCRIPT

// REQUIREMENTS //
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var where = require("./utils/where");
var db = require("./models/index");

var where = require("./utils/where");

app.set("view engine", "ejs");

app.use("/static", express.static("/public"));
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(request, response) {
  response.render("index");
});

app.listen(3000, function() {
  console.log("express-heroku-starter is running on port 3000");
});

