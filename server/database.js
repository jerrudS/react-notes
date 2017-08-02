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

function deleteNote(id) {
  return knex
    .from('notes')
    .where('id', id)
    .del()
}

module.exports = {
  selectNotes: selectNotes,
  insertNote: insertNote,
  deleteNote: deleteNote
}
