var User = require("./user.model.js");

var interface = {
    login: function(req,res){
        var username=req.body.username;
        var password=req.body.password;
        User.find({"username":username})
            .then(function(user){
                if(user.password==password){
                    return res.send(user)
                }
                    return res.status(401).send("Invalid User")
            })
    }
};


module.exports = interface;