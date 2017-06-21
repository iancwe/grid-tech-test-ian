import React, { Component } from 'react'
import axios from 'axios'
import CurrencyList from '../currencylist/currencylist'
import Table from '../table/table1'
import 'ag-grid/dist/styles/ag-grid.css'
import 'ag-grid/dist/styles/theme-fresh.css'

class chcurr extends Component {

  constructor (props) {
    super(props)
    this.state = {
      chosencurrency: 'USD',
      currencies: [],
      chosenamt: 0,
      months: '',
      columnDefs: this.createColumnDefs(),
      rowData: this.createRowData()

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

  // after entering amount and currency
  handleSubmit (e) {
    console.log(this.state.chosenamt)
    e.preventDefault()
  }

  createColumnDefs () {
    return [
            {headerName: 'Currency', field: 'currency'},
            {headerName: 'date', field: 'amountchanged1'},
            {headerName: 'date', field: 'amountchanged2'},
            {headerName: 'date', field: 'amountchanged3'},
            {headerName: 'date', field: 'amountchanged4'},
            {headerName: 'date', field: 'amountchanged5'}
    ]
  }

  createRowData () {
    return [
            {currency: 'IND', amountchanged1: 0, amountchanged2: 0, amountchanged3: 0, amountchanged4: 0, amountchanged5: 0},
            {currency: 'USD', amountchanged1: 0, amountchanged2: 0, amountchanged3: 0, amountchanged4: 0, amountchanged5: 0},
            {currency: 'EUR', amountchanged1: 0, amountchanged2: 0, amountchanged3: 0, amountchanged4: 0, amountchanged5: 0},
            {currency: 'GBP', amountchanged1: 0, amountchanged2: 0, amountchanged3: 0, amountchanged4: 0, amountchanged5: 0},
            {currency: 'RMB', amountchanged1: 0, amountchanged2: 0, amountchanged3: 0, amountchanged4: 0, amountchanged5: 0}
    ]
  }

  // mounting the api and dropdown list
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
          <br />
          <button>Submit</button>
        </form>
        <Table columnDefs={this.state.columnDefs} rowData={this.state.rowData} />
      </div>
    )
  }
}

export default chcurr
