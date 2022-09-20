import React, { Component } from 'react'
import "./item.css"
class item extends Component {
   constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="item-type">
        <div className="image">
          <img id="item-image" src={this.props.src} alt="loading" />
        </div>
        <div className="item-details">
          <span>{this.props.name}</span>
          <span>{this.props.price}</span>
          <span>{this.props.avail}</span>
        </div>
      </div>
    )
  }
}

export default item