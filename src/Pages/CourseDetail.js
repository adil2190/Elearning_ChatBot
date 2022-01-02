import React from "react";
import CourseDetailTable from "../Components/CourseDetailTable";
import { Grid } from "@material-ui/core";

function CourseDetail(props) {
  return (
    <div>
      <h1 className="course-detail-heading">
        Computing Professional Practices
      </h1>

      <Grid style={{ marginLeft: "20px" }} container spacing={6}>
        <Grid item xs={12} lg={6} md={6}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p className="course-detail-sub-heading">Course Code: HS412 </p>
            <p className="course-detail-sub-heading">Credit Hours: 3</p>
          </div>
        </Grid>
      </Grid>
      <Grid style={{ marginLeft: "20px" }} container spacing={6}>
        <Grid item xs={12} lg={6} md={6}>
          <CourseDetailTable />
        </Grid>
      </Grid>
    </div>
  );
}

export default CourseDetail;
