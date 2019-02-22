import React, { Fragment } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import FirstLoginRoute from "./firstLoginRoute";
import WithoutAuthenticationRoute from "./withoutAuthenticationRoute";

import Dashboard from "../pages/dashboard";
import Preferences from "../pages/preferences";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <FirstLoginRoute exact path="/" component={Dashboard} />
        <PrivateRoute path="/preferences" component={Preferences} />
        <WithoutAuthenticationRoute path="/signin" component={SignIn} />
        <WithoutAuthenticationRoute path="/signup" component={SignUp} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Routes;
