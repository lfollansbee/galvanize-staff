var express = require('express');
var router = express.Router();
var pg = require('pg');
var knex = require('../db/knex.js')
var queries = require('../db/queries.js')

router.get('/', function(req, res, next) {
  queries.listStaff()
  .then(function(staff){
  res.render('list-staff', {staff: staff});
  });
});

router.post('/add', function(req, res){
  queries.addStaff(req.body)
  .then(function(){
    res.redirect('/staff');
  })
})



module.exports = router;
