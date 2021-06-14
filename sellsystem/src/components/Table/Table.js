import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {tableStyles} from './TableStyles'


export default function Table({rows,columns}) {
  const classes = tableStyles()
  return (
    <div className={classes.table}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection sortModel={[
    {
      field: 'id',
      sort: 'desc',
    },
  ]}/>
    </div>
  );
}