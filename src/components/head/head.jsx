import React, { Component } from 'react'
import "./head.css"

class head extends Component {
  
  render() {
    return (
      <div className="head">
        <div className="left">
          <p>Shop Limited.</p>
        </div>
        <div className="right">
          <a href="#"className='right-content'>About</a>
          <a href="#"className='right-content'>Contact</a>
          <a href="#"className='right-content'>Login</a>
          <a href="#"className='right-content'>Complain</a>
          <form action="">
            <label htmlFor="">
              <input type="search" name="" id="search" className='right-content'/>
            </label>
          </form>
        </div>
      </div>
    )
  }
}

export default head