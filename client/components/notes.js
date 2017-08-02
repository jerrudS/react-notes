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
      <div>
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
