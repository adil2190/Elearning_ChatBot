import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NotFound from "../NotFound/index";

export const DashboardRoutes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/dashboard/" component={Dashboard} />
        <Route exact path="/dashboard/not" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export const Dashboard = (props) => {
  return <div>Dashboard - Home</div>;
};
