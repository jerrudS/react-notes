import React from 'react'
import ReactDOM from 'react-dom'
import Notes from './components/notes.js'
import Note from './components/note.js'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { notes: [] }
    this.saveNote = this.saveNote.bind(this)
  }
  async componentDidMount() {
    const res = await fetch('/notes')
    const json = await res.json()
    this.setState({ notes: json })
  }
  async saveNote(notes) {
    await fetch('/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(notes)
    })
    this.setState({ notes: [notes].concat(this.state.notes)})
  }
  render() {
    return (
      <div className="container">
        <Note saveNote={ this.saveNote }/>
        <Notes notes={ this.state.notes }/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#main')
)
