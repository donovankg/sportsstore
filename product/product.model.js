/**
 * Created by cleverjam on 9/27/16.
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var initial = require("./initialData");
console.log()

function initialize(initial){
// Add the data in initial data to the Product collection.
    Product.count(function(e,c){
        console.log("count: ", c)
        for(var i=c; i < initial.length; i++){
            var product = new Product(initial[i]);
            product.save((function(err, data){
                var c = i;
                return function(err,data){
                if(!err)
                    console.log(c,"saved")
                }
            })());
        }
    });
}

var productSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

var Product = mongoose.model("Product", productSchema);
initialize(initial);

module.exports = Product