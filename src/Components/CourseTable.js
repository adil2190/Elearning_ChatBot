import * as React from "react";
import { styled } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useHistory, useLocation } from "react-router-dom";
import { getSubCollection } from "../Services/firestoreService";
import { collectionNames } from "../Constants/firebaseCollections";
import { useEffect } from "react";
import { useState } from "react";

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData("1", "Computing Professional Practices", "HS412"),
  createData("2", "Computing Professional Practices", "HS412"),
  createData("3", "Computing Professional Practices", "HS412"),
];

export default function CourseTable() {
  const history = useHistory();
  const location = useLocation();
  const [data, setData] = useState([]);
  const courseData = location.state || [];
  const userId = localStorage.getItem("userId");
  const getData = async () => {
    if (courseData.length == 0) {
      const cData = await getSubCollection(
        collectionNames.students,
        userId,
        "courses"
      );

      console.log(cData);
      setData(cData);
    }
  };
  useEffect(() => {
    setData(courseData);
    getData();
  }, []);
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
              <TableCell
                style={{ color: "#EF0303", cursor: "pointer" }}
                align="center"
                onClick={() =>
                  history.push(`/dashboard/coursedetail/${row.selfId}`)
                }
              >
                {row.courseName}
              </TableCell>
              <TableCell align="center">{row.courseCode}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
