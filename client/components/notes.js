import React from 'react'

export default class Notes extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    const note = event.target.getAttribute('data-id')
    this.props.deleteNote(note)
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.props.notes.map((each, i) => {
              return <li data-id={each.id} onClick={this.handleClick} key={i}>{each.note}</li>
            })
          }
        </ul>
      </div>
    )
  }
}
