var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static( __dirname + '/public/dist/public' ));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Config
app.use(bodyParser.json());

//Datebase
mongoose.connect("mongodb://localhost/Author")
require("./server/config/mongoose.js");

//Routes
require("./server/config/routes.js")(app);

//Port
app.listen(8000, function(){
    console.log("Listening on port: 8000");
})