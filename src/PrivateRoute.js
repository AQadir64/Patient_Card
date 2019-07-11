import { Route, Redirect } from "react-router-dom";
import React from "react";
export const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login/portal", state: { from: props.location } }}
        />
      )
    }
  />

)
