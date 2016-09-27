var Order = require("./order.model.js");

var interface = {
    setOrder: function(req,res,next){
        var order = new Order(req.body);
        Order.create(order)
            .then(function(savedOrder){
                res.send(savedOrder);
            })
    },
    getOrders: function(req,res,next){
        Order.find({})
            .then(function(orders){
                res.send(orders);
            })
    }
};


module.exports = interface;