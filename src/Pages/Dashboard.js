import React from "react";
import Sidebar from "./Sidebar";
import {
  useLocation,
  Redirect,
  BrowserRouter,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

import DashboardDefault from "./DashboardDefault";
import MyCourses from "./MyCourses";

function Dashboard(props) {
  const location = useLocation();
  if (location.pathname == "/dashboard") {
    return <Redirect to="/dashboard/default" />;
  }

  return (
    <div>
      <Sidebar />
      <div className="table">
        <Switch>
          <Route exact path="/dashboard/default" component={DashboardDefault} />
          <Route exact path="/dashboard/mycourses" component={MyCourses} />
        </Switch>
      </div>
    </div>
  );
}

export default Dashboard;