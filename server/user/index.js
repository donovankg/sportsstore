var express = require("express");
var router = express.Router();
var controller = require("./user.controller.js");
//Restart Database
require("./seed");


router.post("/login",controller.login);

module.exports = router;