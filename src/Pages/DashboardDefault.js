import React from "react";
import DashboardCard from "../Components/DashboardCards";
import { Grid } from "@material-ui/core";

function DashboardDefault(props) {
  return (
    <div>
      <h1 className="dashboard-heading">DASHBOARD</h1>
      <div className="course-overview-container">
        <div className="course-overview">
          <h2 className="dashboard-section-heading">Course Overview</h2>
          <p className="dashboard-view-all">View all</p>
        </div>
        <Grid container spacing={6} style={{ marginBottom: "10px" }}>
          <Grid className="grid-item" item md={4} xs={11} lg={3}>
            <DashboardCard />
          </Grid>
          <Grid className="grid-item" item md={4} xs={11} lg={3}>
            <DashboardCard />
          </Grid>
          <Grid className="grid-item" item md={4} xs={11} lg={3}>
            <DashboardCard />
          </Grid>
        </Grid>
      </div>

      <div className="course-overview-container">
        <div className="course-overview">
          <h2 className="dashboard-section-heading">eLibrary</h2>
          <p className="dashboard-view-all">View all</p>
        </div>
        <Grid container spacing={6} style={{ marginBottom: "10px" }}>
          <Grid className="grid-item" item md={4} xs={11} lg={3}>
            <DashboardCard />
          </Grid>
          <Grid className="grid-item" item md={4} xs={11} lg={3}>
            <DashboardCard />
          </Grid>
          <Grid className="grid-item" item md={4} xs={11} lg={3}>
            <DashboardCard />
          </Grid>
          <Grid className="grid-item" item md={4} xs={11} lg={3}>
            <DashboardCard />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default DashboardDefault;
