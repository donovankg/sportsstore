var express = require("express");
var mongoose = require("mongoose");
var model = require("./product/product.model.js")

var products = require("./product/index")


var app = express();
var obj = {
    test: "ok"
};

app.get('/', function(req, res){
    res.type("json");
    res.json(obj);
});

app.use("/products", products);

app.listen(3000, function(){
    console.log("Running on http://localhost:3000");
});

mongoose.connect("localhost", "SportsStore")
var db = mongoose.connection;

db.on("error", function(e){
    console.log(e);
});
db.once("open", function(){
    console.log("Database connected.")
});
