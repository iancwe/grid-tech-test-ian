import React, {Component} from 'react'
import {AgGridReact} from 'ag-grid-react'

export default class extends Component {
  onGridReady (params) {
    this.gridApi = params.api
    this.columnApi = params.columnApi

    this.gridApi.sizeColumnsToFit()
  }

  render () {
    let containerStyle = {
      height: 155,
      width: 500
    }

    return (
      <div style={containerStyle} className='ag-fresh'>
        <h1>Simple ag-Grid React Example</h1>
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
};
