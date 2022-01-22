import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import Login from "../Pages/Login";
import PasswordReset from "../Pages/PasswordReset";
import Signup from "../Pages/Signup";

// import DashboardRoutes from "../Pages/DashBoard/index";

import Dashboard from "../Pages/Dashboard";
import { useEffect } from "react";
const Routes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <Route exact path="/signup/">
          <Signup />
        </Route>

        <Route exact path="/passwordreset/">
          <PasswordReset />
        </Route>

        <Route path="/dashboard/">
          <Dashboard />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
