import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './privateRoute';

import Main from '../pages/main';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <PrivateRoute exact path="/" component={Main} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Routes;
