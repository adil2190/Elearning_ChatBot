import React, { useState } from "react";
import DashboardCard from "../Components/DashboardCards";
import { Grid } from "@material-ui/core";
import CompleteProfileModal from "../Components/CompleteProfileModal";

function DashboardDefault(props) {
  const [openModal, setOpenModal] = useState(false);
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
            <DashboardCard onClicked={() => setOpenModal(true)} />
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

      <CompleteProfileModal
        click={openModal}
        parentCallback={(val) => setOpenModal(val)}
        onSubmit={() => console.log("submitted")}
        label="Are you sure you want to continue?"
        title="Complete Your Student Profile"
      />
    </div>
  );
}

export default DashboardDefault;
