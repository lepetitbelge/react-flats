import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from './marker.jsx'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class ReactMap extends Component {
  static defaultProps = {
    center: {
      lat: 48.859489,
      lng: 2.320582
    },
    zoom: 11
  }

  constructor(props) {
    super(props)
  }

  renderMarker(coordinate) {
    return (<Marker
            key={coordinate.lat}
            lat={coordinate.lat}
            lng={coordinate.lng}
            selectedFlat={this.props.selectedFlat === coordinate.id ? 'selected' : ''}
          />)
  }

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "XXXXXXXXXXXX" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        {this.props.coordinates.map(coordinate => this.renderMarker(coordinate))}
        </GoogleMapReact>
      </div>
    );
  }
}

export default ReactMap;
