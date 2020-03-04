import React, { Component } from 'react'
import Flat from './flat.jsx'

class FlatList extends Component {
  renderFlats = () => {
    return this.props.flats.map(flat => {
      return <Flat
              flat={flat}
              id={flat.id}
              key={flat.id}
              selectedFlat={this.props.selectedFlat}
              updateFlat={this.props.updateFlat}
             />
    })
  }

  render() {
    return (
      <div className="flat-list">
        {this.renderFlats()}
      </div>
    )
  }
}

export default FlatList
