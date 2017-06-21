import React, { Component } from 'react'
import {AgGridReact} from 'ag-grid-react'

class Table extends Component {

  createItem () {
    var item = {
      currency: createUniqueRandomSymbol(),
      amountchanged1: Math.floor(Math.random() * 100),
      amountchanged2: Math.floor(Math.random() * 100),
      amountchanged3: Math.floor(Math.random() * 100),
      amountchanged4: Math.floor(Math.random() * 100),
      amountchanged5: Math.floor(Math.random() * 100)
    }
    return item
  }

  render () {
    let containerStyle = {
      height: 155,
      width: 500
    }

    let columnDefs = [
        // these are the row groups, so they are all hidden (they are showd in the group column)
        {headerName: 'Symbol', field: 'symbol'},
        {headerName: 'Price', field: 'price'},
        {headerName: 'Group', field: 'group'}
    ]

    let gridOptions = {
      deltaRowDataMode: true,
      enableStatusBar: true,
      columnDefs: columnDefs,
      animateRows: true,
      enableColResize: true,
      rowSelection: 'multiple',
      enableRangeSelection: true,
      enableSorting: true,
      getRowNodeId: function (data) { return data.currency }
    }
    return (
      <div style={containerStyle} className='ag-fresh'>
        <h1>my eyes</h1>
        <AgGridReact
          // properties
          columnDefs={this.props.columnDefs}
          rowData={this.props.rowData}
          // events
          onGridReady={this.onGridReady}
        />
      </div>
    )
  }

}

export default Table
