import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { setAuth } from "../reduxToolkit/auth/authSlice";

function PrivateRoute({ children }) {
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const [localUser, setLocalUser] = useState(null);
  const [localLoggedIn, setLocalLoggedIn] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const savedUser = JSON.parse(localStorage.getItem("user"));
      const savedLogin = localStorage.getItem("isLoggedIn") === "true";
      setLocalUser(savedUser);
      setLocalLoggedIn(savedLogin);
      dispatch(setAuth({ user: savedUser, isLoggedIn: savedLogin }));
    } catch (e) {
      console.error("LocalStorage parse error:", e);
    }
  }, []);

  const authUser = isLoggedIn ? user : localUser;
  const authenticated = isLoggedIn || localLoggedIn;

  if (!authenticated) {
    return <Navigate to="/login" replace />;
  }

  return React.cloneElement(children, { user: authUser });
}

export default PrivateRoute;
