const knex = require('knex')({
  dialect: 'pg',
  connection: 'postgres://localhost:5432/notes'
})

function selectNotes() {
  return knex
    .select('*').from('notes')
}

function insertNote(note) {
  return knex
    .insert(note)
    .into('notes')
    .returning('*')
}

module.exports = {
  selectNotes: selectNotes,
  insertNote: insertNote
}
