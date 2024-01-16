import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box, Container } from '@mui/material';
import { AirSecondData } from './AirSecondData';

const columns = [
    { id: 'name', label: 'Current Pollutant', minWidth: 70 },
    { id: 'status', label: 'Air Quality Scale' },
    { id: 'description', label: 'Description', minWidth: 170 },
    { id: 'number', label: 'Number' },
    { id: 'concentration', label: 'Over the past hour', minWidth: 100 },
];

export default function AirSecondComp() {
    const [getdata, GetDataReceived] = useState(AirSecondData[0].pollutants);
    console.log(getdata);

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Box style={{width:"600px", marginTop:"20px"}}>
            <Paper >
                <TableContainer >
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {getdata
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => (
                                    <TableRow
                                        hover
                                        role="checkbox"
                                        tabIndex={-1}
                                        key={index}
                                    >
                                        {columns.map((column) => (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof row[column.id] === 'number'
                                                    ? column.format(row[column.id])
                                                    : row[column.id]}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={getdata.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>


    );
}
