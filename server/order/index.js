var express = require("express");
var router = express.Router();
var controller = require("./order.controller.js");
//Restart Database


router.post("/",controller.setOrder);

module.exports = router;