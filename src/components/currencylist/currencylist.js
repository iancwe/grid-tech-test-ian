import React from 'react'

const CurrencyList = (props) => (
  <select onChange={props.handleChoice}>
    <option disabled selected>USD</option>
    {props.currencies.map((currency, index) => {
      return <option key={index} value={index}>{currency}</option>
    })}
  </select>
)

export default CurrencyList
