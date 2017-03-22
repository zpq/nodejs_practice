var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.cookie("test", "usercookie", {expires: new Date(Date.now() + 3600)})
  res.send('respond with a resource');
});

module.exports = router;
