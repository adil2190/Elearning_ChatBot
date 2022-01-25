import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import {
  useLocation,
  Redirect,
  BrowserRouter,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import DashboardDefault from "./DashboardDefault";
import MyCourses from "./MyCourses";
import CourseDetail from "./CourseDetail";
import MyProfile from "./MyProfile";
import ChangePassword from "./ChangePassword";

function Dashboard(props) {
  const auth = getAuth();
  const history = useHistory();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        return history.push("/");
      }
    });
  }, []);

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
          <Route
            exact
            path="/dashboard/coursedetail/:courseId"
            component={CourseDetail}
          />
          <Route exact path="/dashboard/myprofile" component={MyProfile} />
          <Route
            exact
            path="/dashboard/changepassword"
            component={ChangePassword}
          />
        </Switch>
      </div>
    </div>
  );
}

export default Dashboard;
