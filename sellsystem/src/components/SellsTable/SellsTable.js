import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Nombre de Cliente', width: 130 },
  {
    field: 'total',
    headerName: 'Total',
    type: 'number',
    width: 90,
  },
  { field: 'code', headerName: 'Codigo de Compra', width: 130 },
];

const rows = [
  { id: 1, name: 'Martina Aburto', total: 15000, code: '56BS2' },
  { id: 2, name: 'Jose Quintanilla', total: 25000, code: 'RS4323' },
  { id: 3, name: 'Luis Felipe Quezada', total: 22980, code: 'BH3212' },
  { id: 4, name: 'Luisa Martinez', total: 4690, code: 'BM2312' },
  { id: 5, name: 'Fernanda Aguayo', total: 12000, code: 'QG2341' },
  { id: 6, name: 'Kun Aguero', total: 14300, code: 'BG2314' },
  
];

export default function InventoryTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}