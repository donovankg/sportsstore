var express = require("express");
var mongoose = require("mongoose");
var product = require("./server/product");
var order = require("./server/order");

var app = express();
//Connect to MongoDB
mongoose.connect("localhost", "SportsStore")
var db = mongoose.connection;
db.on("error", function(e){
    console.log(e);
});
db.once("open", function(){
    console.log("Database connected.")
});
//Middleware
app.use(express.static('client'));
//Routers
app.use("/products", product);
app.use("/orders", order);
//Default Router
app.get('/',function(req,res,next){
    res.sendFile(__dirname+"/client"+"/index.html");
});
//Page Not Found
app.get('*',function(req,res,next){
    res.status(404).send('Error 404 Tha page does not exists');
});
//Initialize Server
app.listen(3000, function(){
    console.log("Running on http://localhost:3000");
});
