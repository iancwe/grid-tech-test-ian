import React, { Component } from 'react'
import Chcurr from '../chcurr/chcurr'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <h1>Currency Converter</h1>
        <Chcurr />
      </div>
    )
  }
}

export default App
