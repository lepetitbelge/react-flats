import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      nothing: null
    }
  }

  render() {
    return (
      <div className="map-container"></div>
      <div className="flat-list"></div>
    )
  }
}

export default App
