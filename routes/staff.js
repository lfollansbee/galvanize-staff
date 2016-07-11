var express = require('express');
var router = express.Router();
var staff = require("../db/queries")


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('list-staff', {staff});
});

module.exports = router;
