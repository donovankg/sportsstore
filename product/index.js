/**
 * Created by cleverjam on 9/27/16.
 */
var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next){
    res.json({"product index":"ok"})
})

module.exports = router;