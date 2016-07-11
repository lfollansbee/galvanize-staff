var express = require('express');
var router = express.Router();
var pg = require('pg');
var knex = require('../db/knex.js')
var queries = require('../db/queries.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  queries.listStaff()
  .then(function(staff){
  res.render('list-staff', {staff: staff});
  });
});

module.exports = router;
