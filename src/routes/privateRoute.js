import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isAuthenticated } from '../services/auth';
import { checkFirstLogin } from '../services/localStorage';

const PrivateRoute = ({ component, ...rest }) => {
  const Component = checkFirstLogin(component);
  return (
    <Route
      {...rest}
      render={props => (isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />
      ))
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.shape.isRequired,
};

export default PrivateRoute;
