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
import { useState } from "react";
import Chatbot from "../Components/Chatbot";

function Dashboard(props) {
  const auth = getAuth();
  const history = useHistory();
  const [show, setShow] = useState(false);

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
    <div style={{ position: "relative" }}>
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
      <div className="chatbot-icon" onClick={() => setShow(!show)}></div>
      {show && <Chatbot onClose={() => setShow(false)} />}

      {show && (
        <div className="chatbot-overlay" onClick={() => setShow(!show)}></div>
      )}
    </div>
  );
}

export default Dashboard;
