import React from 'react'

import Table from '../../components/SellsTable/Table';

/**
 * @Container - container for inventory store
 */
function Inventory() {

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Nombre de Producto', width: 130 },
    {
      field: 'stock',
      headerName: 'Stock',
      type: 'number',
      width: 90,
    },
    { field: 'code', headerName: 'Codigo de Barras', width: 130 },
  ];
  
  const rows = [
    { id: 1, name: 'Paleta Kylie', stock: 10, code: '56BS2' },
    { id: 2, name: 'Rubor rosa', stock: 8, code: 'RS4323' },
    { id: 3, name: 'Beauty Hair', stock: 7, code: 'BH3212' },
    { id: 4, name: 'Booty Magic', stock: 5, code: 'BM2312' },
    { id: 5, name: 'Quemador de Grasa', stock: 12, code: 'QG2341' },
    { id: 6, name: 'Bella Gummy', stock: 10, code: 'BG2314' },
    
  ];
  return (
    <div>
      <Table rows={rows} columns={columns}/>
    </div>
  )
}

export default Inventory
