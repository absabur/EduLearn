import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { isLoggedIn, user } = useSelector((state) => state.auth);

  const authUser = user;
  const authenticated = isLoggedIn;

  if (!authenticated) {
    return <Navigate to="/login" replace />;
  }

  return React.cloneElement(children, { user: authUser });
}

export default PrivateRoute;
