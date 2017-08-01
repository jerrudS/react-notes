const request = require('request')
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const { selectNotes } = require('./database')

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))

function filterNotes(note) {
  const noteOnly = note.map(item => {
    return {
      note: note
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

app.listen(3005, () => {
  console.log('Listening on port 3005')
})
