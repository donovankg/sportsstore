/**
 * Created by cleverjam on 9/27/16.
 */
var express = require("express");
var router = express.Router();
var controller = require("./product.controller.js");
//Restart Database
require("./seed");


router.get("/",controller.getList);

module.exports = router;