import React from 'react'
import ReactDOM from 'react-dom'
import Notes from './components/notes.js'
import Note from './components/note.js'

ReactDOM.render(
  <Notes />,
  document.querySelector('#list')
)

ReactDOM.render(
  <Note />,
  document.querySelector('#input')
)
