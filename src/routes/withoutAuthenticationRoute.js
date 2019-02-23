import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
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

withoutAuthenticationRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.shape().isRequired,
};

export default withoutAuthenticationRoute;
