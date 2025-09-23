import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function GuestRoute({ children }) {
  const { isLoggedIn } = useSelector((state) => state.auth);

  if (isLoggedIn) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}

export default GuestRoute;
