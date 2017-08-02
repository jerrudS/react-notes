import React from 'react'

export default class Notes extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.props.notes.map((each, i) => {
              return <li key={i}>{each.note}</li>
            })
          }
        </ul>
      </div>
    )
  }
}
