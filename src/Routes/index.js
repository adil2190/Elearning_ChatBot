import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "../Pages/Login/index";
import { DashboardRoutes } from "../Pages/DashBoard/index";
const Routes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <Route exact path="/dashboard/">
          <DashboardRoutes />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
