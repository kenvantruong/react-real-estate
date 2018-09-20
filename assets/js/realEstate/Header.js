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
       <img className="logo" src="https://github.com/kenvantruong/react-real-estate/blob/master/public/img/airbnb-logo.png?raw=true" alt="logo" />
        <nav>
          <a href="#">Become a host</a>
          <a href="#">Help</a>
          <a href="#">Sign up</a>
          <a href="#" className="register-btn">Register</a>
        </nav>
        <div className="divOfH1">
          <h1 className="headerOne">Book unique homes and experiences all over the world.</h1>
        </div>
      </header>
    )
  }
}

