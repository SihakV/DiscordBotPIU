import React from "react";
import { Route, Navigate } from "react-router-dom";
import useAuth from "./useAuth";

const ProtectedRoute = ({ element, ...rest }) => {
  const { authenticated } = useAuth();

  return (
    <Route
      {...rest}
      element={
        authenticated ? element : <Navigate to="/" replace /> // redirect to home or login page
      }
    />
  );
};

export default ProtectedRoute;
