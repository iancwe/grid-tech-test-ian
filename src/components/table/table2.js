// Column for the table
// var columnDefs = [
//     // these are the row groups, so they are all hidden (they are showd in the group column)
//     {headerName: 'Symbol', field: 'symbol'},
//     {headerName: 'Price', field: 'price'},
//     {headerName: 'Group', field: 'group'}
// ]

// local storage for rowData update
// var immutableStore = []

// Loop to create the rows
for (var i = 0; i < 5; i++) {
  var newItem = createItem()
  immutableStore.push(newItem)
}

function removeSelected () {
  var selectedRowNodes = gridOptions.api.getSelectedNodes()
  var selectedIds = selectedRowNodes.map(function (rowNode) { return rowNode.id })
  immutableStore = immutableStore.filter(function (dataItem) { return selectedIds.indexOf(dataItem.symbol) < 0 })
  gridOptions.api.setRowData(immutableStore)
}

function updatePrices () {
  var newStore = []
  immutableStore.forEach(function (item) {
    newStore.push({
            // use same symbol as last time, this is the unique id
      currency: item.symbol,
            // group also stays the same
      amountchanged1: item.group,
            // add random price
      amountchanged2: Math.floor(Math.random() * 100),
      amountchanged3: Math.floor(Math.random() * 100),
      amountchanged4: Math.floor(Math.random() * 100),
      amountchanged5: Math.floor(Math.random() * 100)
    })
  })
  immutableStore = newStore
  gridOptions.api.setRowData(immutableStore)
}

function filter (list, callback) {
  var filteredList = []
  list.forEach(function (item) {
    if (callback(item)) {
      filteredList.push(item)
    }
  })
  return filteredList
}

// function createItem () {
//   var item = {
//     currency: createUniqueRandomSymbol(),
//     amountchanged1: Math.floor(Math.random() * 100),
//     amountchanged2: Math.floor(Math.random() * 100),
//     amountchanged3: Math.floor(Math.random() * 100),
//     amountchanged4: Math.floor(Math.random() * 100),
//     amountchanged5: Math.floor(Math.random() * 100)
//   }
//   return item
// }

// var gridOptions = {
//   deltaRowDataMode: true,
//   enableStatusBar: true,
//   columnDefs: columnDefs,
//   animateRows: true,
//   enableColResize: true,
//   rowSelection: 'multiple',
//   enableRangeSelection: true,
//   enableSorting: true,
//   getRowNodeId: function (data) { return data.currency }
// }

// after page is loaded, create the grid.
document.addEventListener('DOMContentLoaded', function () {
  var eGridDiv = document.querySelector('#myGrid')
  new agGrid.Grid(eGridDiv, gridOptions)
  gridOptions.api.setRowData(immutableStore)
  setGroupingEnabled(false)
})
