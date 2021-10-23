import React, { Component } from 'react'
import Navbar from './components/navbar'
import Login from './components/login'


export default class App extends Component {
  render () {
    return (
      <div className ="container">
        <div className ="row">
          <Navbar/>
          <br></br>
          <Login/>
        </div>
      </div>
    )
  }
}