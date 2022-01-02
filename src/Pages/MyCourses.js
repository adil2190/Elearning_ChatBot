import React from "react";
import CourseTable from "../Components/CourseTable";
import { Grid } from "@material-ui/core";

function MyCourses(props) {
  return (
    <div>
      <h1 className="dashboard-heading" style={{ marginLeft: "40px" }}>
        MY COURSES
      </h1>
      <Grid style={{ marginLeft: "20px" }} container spacing={6}>
        <Grid item xs={12} lg={6} md={6}>
          <CourseTable />
        </Grid>
      </Grid>
    </div>
  );
}

export default MyCourses;
