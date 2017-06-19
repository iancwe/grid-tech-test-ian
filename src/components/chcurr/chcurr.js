import React, { Component } from 'react'
import axios from 'axios'
import CurrencyList from '../currencylist/currencylist'

class chcurr extends Component {

  constructor (props) {
    super(props)
    this.state = {
      chosencurrency: 'USD',
      currencies: [],
      chosenamt: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // Preload all the different currency into a dropdown list (deafult is left as usd tho)
  choose () {
    axios({
      method: 'get',
      url: 'https://openexchangerates.org/api/currencies.json',
      responseType: 'json',
      crossDomain: true
    })
        .then((response) => {
          let currenyObj = response.data
          return currenyObj
        })
        .then((currenyObj) => {
          let currencies = Object.keys(currenyObj)
          // console.log(currencies)
          this.setState({
            currencies: currencies
          })
        })
        .catch((err) => {
          console.log(err)
        })
  }

  // Handling the chosen currency
  chooseCurrency (e) {
    e.preventDefault()
    console.log(e.target.value, this.state.currencies[e.target.value])
    let chosencurrency = this.state.currencies[e.target.value]
    this.setState({
      chosencurrency: chosencurrency
    })
  }

  // Handling chosen amount of money to convert
  handleChange (e) {
    e.preventDefault()
    this.setState({chosenamt: e.target.value})
  }

  handleSubmit (e) {
    console.log(this.state.chosenamt)
    e.preventDefault()
  }

  componentDidMount () {
    this.choose()
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Currency To Convert
        <CurrencyList currencies={this.state.currencies} handleChoice={(e) => this.chooseCurrency(e)} />
          </label>
          <label>Amount to Convert<input type='text' placeholder='1000' value={this.state.chosenamt} onChange={this.handleChange} /></label>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default chcurr
