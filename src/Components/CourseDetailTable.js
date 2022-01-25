import * as React from "react";
import { styled } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useHistory } from "react-router-dom";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("1", "Computing Professional Practices", "HS412", "3"),
  createData("2", "Computing Professional Practices", "HS412", "3"),
  createData("3", "Computing Professional Practices", "HS412", "3"),
];

export default function CourseDetailTable({ title, data }) {
  const history = useHistory();

  console.log(data);
  return (
    <TableContainer
      style={{ backgroundColor: "#f6f6f6", marginTop: "20px" }}
      component={Paper}
    >
      <div className="course-detail-table-title">{title}</div>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead style={{ backgroundColor: "#452380" }}>
          <TableRow>
            <TableCell style={{ color: "#fff" }}>S.No</TableCell>
            <TableCell style={{ color: "#fff" }} align="center">
              Obtained Marks
            </TableCell>
            <TableCell style={{ color: "#fff" }} align="center">
              Total Marks
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="center">{row.obtainedMarks}</TableCell>
              <TableCell align="center">{row.totalMarks}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
