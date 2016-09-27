/**
 * Created by cleverjam on 9/27/16.
 */
var express = require("express");
var router = express.Router();
var Product = require("./product.controller");

router.get("/", function(req, res, next){
    Product.getList()
        .then(function(products){
            res.type("json");
            res.json(products)
        })
        .catch(function(e){
            res.send(e);
        })
})

module.exports = router;