import React from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthService } from "./authetication";

export const SecretRoute = ({ component: Component, user:User, ...rest }) => (
  <Route
    {...rest}
    render={(props,user) =>
      AuthService.isAuthenticated === true ? (
        <Component {...props} user={User}/>
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);
