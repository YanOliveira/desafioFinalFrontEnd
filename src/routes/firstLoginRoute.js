import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated, firstLogin } from "../services/auth";

const firstLoginRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() && firstLogin() === "true" ? (
        <Redirect
          to={{ pathname: "/preferences", state: { from: props.location } }}
        />
      ) : (
        <Component {...props} />
      )
    }
  />
);

export default firstLoginRoute;
