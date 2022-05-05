import React from 'react'
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ShareholdersTable = ({ data }) => {
    const columns = [
        {
            name: 'id',
            label: 'id',
        },
        {
            name: 'firstname',
            label: 'Firstname',
        },
        {
            name: 'lastname',
            label: 'Lastname',
        },
        {
            name: 'IBAN',
            label: 'IBAN',
        }, {
            name: 'movie',
            label: 'Movie',
        },
        {
            name: 'address',
            label: 'Address',
        }, {
            name: '',
            label: '',
            options: {
                filter: false,
                sort: false,
                viewColumns: false,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <IconButton
                            id={'Edit-' + tableMeta.rowIndex}
                            style={{ display: 'none' }}
                            component="button"
                            variant="body2"
                            onClick={(event) => {
                                console.log(event);
                                alert(tableMeta.rowIndex);
                            }}
                        >
                            <EditIcon />
                        </IconButton>
                    );
                }
            }
        }];

    console.log(data?.getShareholders)
    return (
        <div>
  <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">First name</TableCell>
            <TableCell align="right">Last name</TableCell>
            <TableCell align="right">Movie</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.getShareholders.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.firstname}</TableCell>
              <TableCell align="right">{row.lastname}</TableCell>
              <TableCell align="right">{row.movie}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}

export default ShareholdersTable
