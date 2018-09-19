import React, { Component} from 'react'


export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Ken'
    }
  } 
  render () {
    return (
      <header> 
        <div className="logo"> Logo </div>
        <nav>
          <a href="#">Become a host</a>
          <a href="#">Help</a>
          <a href="#">Sign up</a>
          <a href="#" className="register-btn">Register</a>
        </nav>
      </header>
    )
  }
}

