var Product = require("./product.model.js");

var interface = {
    getList: function(req,res,next){
        Product.find({})
            .then(function(products){
                res.send(products)
            })
            .catch(function(err){
                console.log(err);
                res.status(400).send(err);
            });
    }
};


module.exports = interface;