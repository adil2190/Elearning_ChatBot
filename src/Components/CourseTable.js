import * as React from "react";
import { styled } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("1", "Computing Professional Practices", "HS412", "3"),
  createData("2", "Computing Professional Practices", "HS412", "3"),
  createData("3", "Computing Professional Practices", "HS412", "3"),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead style={{ backgroundColor: "#452380" }}>
          <TableRow>
            <TableCell style={{ color: "#fff" }}>S.No</TableCell>
            <TableCell style={{ color: "#fff" }} align="center">
              Course Name
            </TableCell>
            <TableCell style={{ color: "#fff" }} align="center">
              Course Code
            </TableCell>
            <TableCell style={{ color: "#fff" }} align="center">
              Credit Hours
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell style={{ color: "#EF0303" }} align="center">
                {row.calories}
              </TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}