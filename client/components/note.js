import React from 'react'

export default class Note extends React.Component {
  constructor(props) {
    super(props)
    this.state = { note: [] }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    const { value } = event.target
    fetch('/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(value)
    })
    .catch(err => {
      console.log('ERROR', err)
    })
  }

  render() {
    return (
      <div className="form-inline">
        <input
          className="form-control"
          autoFocus
          onSubmit={this.handleSubmit}
          placeholder="Enter Note Here"
          type="text"/>
        <button className="btn btn-default" type="submit">
          Add Note
        </button>
      </div>
    )
  }
}
