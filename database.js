const knex = require('knex')({
  dialect: 'pg',
  connection: 'postgres://localhost:5432/notes'
})

function selectNotes() {
  return knex
    .select('*').from('notes')
}

module.exports = {
  selectNotes: selectNotes
}
