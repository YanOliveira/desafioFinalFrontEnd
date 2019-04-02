import React, { Fragment } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import WithoutAuthenticationRoute from "./withoutAuthenticationRoute";

import Dashboard from "../pages/Dashboard";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import Meetup from "../pages/Meetup";
import NewMeetup from "../pages/NewMeetup";
import Search from "../pages/Search";
import Notfound from '../pages/NotFound'

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard} />
        <PrivateRoute path="/search" component={Search} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/meetup/:id" component={Meetup} />
        <PrivateRoute path="/newmeetup" component={NewMeetup} />
        <PrivateRoute path="/notfound" component={Notfound}/>
        <WithoutAuthenticationRoute path="/signin" component={SignIn} />
        <WithoutAuthenticationRoute path="/signup" component={SignUp} />        
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Routes;
