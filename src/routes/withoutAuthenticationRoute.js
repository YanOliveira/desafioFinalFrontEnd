import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../services/auth';

const withoutAuthenticationRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (isAuthenticated() ? (
      <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    ) : (
      <Component {...props} />
    ))
    }
  />
);

export default withoutAuthenticationRoute;
