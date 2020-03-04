import React, { Component } from 'react'
import ReactMap from './react_map.jsx'
import FlatList from './flat_list.jsx'
import flats from '../../data/flats.js'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      flats: flats,
      flatCoordinates: [],
      selectedFlat: null
    }
  }

  componentWillMount() {
    this.populateFlatCoordinates(this.state.flats)
  }

  populateFlatCoordinates(flats) {
    const coordinates = flats.map(flat => {
      return ({ lat: flat.lat, lng: flat.lng, id: flat.id })
    })
    this.setState({ flatCoordinates: coordinates })
  }

  updateSelectedFlat = (id) => {
    this.setState({
      selectedFlat: id
    })
  }

  render() {
    return (
      <div>
        <div className="map-container">
          <ReactMap
            coordinates={this.state.flatCoordinates}
            selectedFlat={this.state.selectedFlat}
          />
        </div>
        <FlatList
          flats={this.state.flats}
          updateFlat={this.updateSelectedFlat}
        />
      </div>
    )
  }
}

export default App;
