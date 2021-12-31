import React from "react";
import DashboardCard from "../Components/DashboardCards";

function DashboardDefault(props) {
  return (
    <div>
      <h1 className="dashboard-heading">DASHBOARD</h1>
      <DashboardCard />
    </div>
  );
}

export default DashboardDefault;
