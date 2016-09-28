'use strict';

var Order = require('./order.model');

Order.find({}).remove()
    .then(function(){
        console.log("remove orders")
    });