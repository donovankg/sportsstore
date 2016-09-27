var express = require("express");
var router = express.Router();
var controller = require("./order.controller.js");

router.post("/",controller.setOrder);

module.exports = router;