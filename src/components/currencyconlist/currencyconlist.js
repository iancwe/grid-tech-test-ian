import React from 'react'

const CurrencyList2 = (props) => (
  <select multiple onChange={props.handleChoice}>
    {props.currencies.map((currency, index) => {
      return <option key={index} value={index}>{currency}</option>
    })}
  </select>
)

export default CurrencyList2
