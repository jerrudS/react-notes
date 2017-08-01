import React from 'react'

export default class Note extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(event.target)
    const formData = new FormData(event.target)
    const userData = {
      note: formData.get('note')
    }
    console.log(userData)
    fetch('/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .catch(err => {
      console.log('ERROR', err)
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-inline">
          <input
            className="form-control"
            autoFocus
            placeholder="Enter Note Here"
            name="note"
            type="text"/>
          <button className="btn btn-default" type="submit">
            Add Note
          </button>
        </div>
      </form>
    )
  }
}
