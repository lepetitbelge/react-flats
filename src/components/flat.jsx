import React, { Component } from 'react'

class Flat extends Component {
  handeClick = () => {
    this.props.updateFlat(this.props.flat.id)
  }

  render() {
    const style = {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${this.props.flat.imageUrl})`}

    return (
      <div className="card" style={style} id={this.props.id} onClick={this.handeClick}>
        <div className="card-category">{this.props.flat.price}</div>
        <div className="card-description">
          <h2>{this.props.flat.description}</h2>
        </div>
        <a href="#" className="card-link"></a>
      </div>
    )
  }
}

export default Flat
