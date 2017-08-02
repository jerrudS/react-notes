const request = require('request')
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const { selectNotes, insertNote, deleteNote } = require('./database')

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))

function filterNotes(note) {
  const noteOnly = note.map(item => {
    return {
      note: item.note
    }
  })
  return noteOnly
}

app.get('/notes', (req, res) => {
  selectNotes()
    .then(data => {
      (res.send(filterNotes(data)))
    })
})

app.post('/notes', (req, res) => {
  const note = req.body

  insertNote(note)
    .then(data => {
      res.status(201).json(data)
    })
})

app.delete('/notes/:id', (req, res) => {
  const itemId = parseInt(req.params.id, 10)
  console.log(itemId)

  deleteNote(itemId)
    .then(() => {
      res.sendStatus(204)
    })
})

app.listen(3005, () => {
  console.log('Listening on port 3005')
})
