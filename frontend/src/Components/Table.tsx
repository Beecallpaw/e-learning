import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import MuiTableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import moment from 'moment'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const TableCell = withStyles({
    root: {
        borderBottom: "none"
    }
})(MuiTableCell);

const textColor = {
    color: "#51b984"
}

interface IProps {
    files: []
}
interface IFile {
    created_at: string, _id: string, filename: string, size: string
}
export default function SimpleTable(props: IProps) {
    const classes = useStyles();

    const { files } = props;
    let tableContent;
    if (!files.length) {
        tableContent = <div style={{ margin: "10px" }}>No Data</div>
    } else {
        tableContent = files.map((row: IFile) => (
            <TableBody>
                <TableRow key={row.filename}>
                    <TableCell component="th" scope="row">
                        {row.filename} <a href=""><FontAwesomeIcon icon={faDownload} style={{ color: "#51b984" }} /></a>
                    </TableCell>
                    <TableCell align="center">{moment(row.created_at).format('MMM D, YYYY')}</TableCell>
                    <TableCell align="center">{moment(row.created_at).format('MMM D, YYYY')}</TableCell>
                    <TableCell align="center">{row.size} bytes</TableCell>
                </TableRow>
            </TableBody>
        ))
    }

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow style={{ boxShadow: "rgba(168, 201, 208, 0.33) 0 2px 2px 0" }}>
                        <TableCell style={textColor}>NAME</TableCell>
                        <TableCell align="center" style={textColor}>LAST ADDED</TableCell>
                        <TableCell align="center" style={textColor}>LAST MODIFIED</TableCell>
                        <TableCell align="center" style={textColor}>SIZE</TableCell>
                    </TableRow>
                </TableHead>
                {tableContent}
            </Table>
        </TableContainer>
    );
}
