var express = require("express");
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send("API is running properly");
});

module.exports = router;
