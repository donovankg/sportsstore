'use strict';

var User = require('./user.model');

User.find({}).remove()
    .then(function(){
        User.create({
                "username":"admin",
                "password":"secret"
            })
            .then(function() {
                console.log('finished populating users');
            });
    });