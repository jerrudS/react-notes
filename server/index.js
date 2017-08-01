const request = require('request')
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const { selectNotes, insertNote } = require('./database')

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

app.listen(3005, () => {
  console.log('Listening on port 3005')
})
