// SERVER-SIDE JAVASCRIPT

// REQUIREMENTS //
var express = require("express"),
    app = express(),
    path = require("path"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

var where = require("./utils/where");

var db = require('./models/index');

app.set("view engine", "ejs");
app.use("/static", express.static("/public"));
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(request, response) {
  response.render("index");
});

app.listen(3000, function() {
  console.log('listening on port 3000');
});


