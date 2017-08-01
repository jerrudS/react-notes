import React from 'react'

export default class Notes extends React.Component {
  constructor(props) {
    super(props)
    this.state = { note: [] }
  }

  async componentDidMount() {
    try {
      const res = await fetch('/notes')
      const json = await res.json()
      return this.setState({ note: json })
    }
    catch (err) {
      console.log('ERROR', err)
    }
  }

  render() {
    return (
      <div className="container col-md-4 col-md-offset-4">
        <h1>My Notes</h1>
        <div className="form-inline">
          <input
            className="form-control"
            autoFocus
            placeholder="Enter Note Here"
            type="text"/>
          <button className="btn btn-default" type="submit">
            Add Note
          </button>
        </div>
        <ul>
          {
            this.state.note.map((each, i) => {
              return <li key={i}>{each.note}</li>
            })
          }
        </ul>
      </div>
    )
  }
}
