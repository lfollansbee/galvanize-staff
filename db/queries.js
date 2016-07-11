var knex = require('./knex');

module.exports = {
  listStaff: function(){
      return knex('staff').select()
    },
  addStaff: function(newStaff){
    return knex('staff').insert({
      first_name: newStaff.first_name,
      last_name: newStaff.last_name
    })
  },

}
