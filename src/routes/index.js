import React, { Fragment } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import WithoutAuthenticationRoute from "./withoutAuthenticationRoute";

import Dashboard from "../pages/Dashboard";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard} />
        <PrivateRoute path="/profile" component={Profile} />
        <WithoutAuthenticationRoute path="/signin" component={SignIn} />
        <WithoutAuthenticationRoute path="/signup" component={SignUp} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Routes;
