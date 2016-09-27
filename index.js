var express = require("express");
var mongoose = require("mongoose");
//var model = require("./product/product.model.js") //You don't need the model here
var products = require("./server/product");

var app = express();

// var obj = {
//     test: "ok"
// };
//
// app.get('/', function(req, res){
//     res.type("json");
//     res.json(obj);
// });
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
app.use("/products", products);
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
