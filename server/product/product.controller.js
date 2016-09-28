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
    },
    save: function(req,res,next){
        var id = req.params.id;
        Product.update({_id:id},req.body)
            .then(function(products){
                res.send(products)
            })
            .catch(function(err){
                console.log(err);
                res.status(400).send(err);
            });
    },
    delete: function(req,res,next){
        var id = req.params.id;
        Product.find({_id:id}).remove()
            .then(function(){
                res.send("product deleted")
            })
            .catch(function(err){
                console.log(err);
                res.status(400).send(err);
            });
    }
};


module.exports = interface;