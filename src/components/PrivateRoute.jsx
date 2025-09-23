import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const localUser = JSON.parse(localStorage.getItem("user"));
  const localLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const authUser = isLoggedIn ? user : localUser;
  const authenticated = isLoggedIn || localLoggedIn;
  if (!authenticated) {
    return <Navigate to="/login" replace />;
  }
  return React.cloneElement(children, { user: authUser });
}

export default PrivateRoute;
