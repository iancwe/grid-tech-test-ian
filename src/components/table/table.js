import React, { Component } from 'react'
import {AgGridReact} from 'ag-grid-react'

class CurTable extends Component {

  onGridReady (params) {
    this.gridApi = params.api
    this.columnApi = params.columnApi

    this.gridApi.sizeColumnsToFit()
  }

  render () {
    return (
      <div>
        <h1>Simple ag-Grid React Example</h1>
        <AgGridReact columnDefs={this.props.columnDefs}
          rowData={this.props.rowData}
          onGridReady={this.onGridReady} />
      </div>
    )
  }

}

export default CurTable
