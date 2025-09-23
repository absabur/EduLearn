import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const [localUser, setLocalUser] = useState(null);
  const [localLoggedIn, setLocalLoggedIn] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const savedUser = JSON.parse(localStorage.getItem("user"));
      const savedLogin = localStorage.getItem("isLoggedIn") === "true";
      setLocalUser(savedUser);
      setLocalLoggedIn(savedLogin);
    } catch (e) {
      console.error("LocalStorage parse error:", e);
    } finally {
      setReady(true);
    }
  }, []);

  if (!ready) {
    return null;
  }

  const authUser = isLoggedIn ? user : localUser;
  const authenticated = isLoggedIn || localLoggedIn;

  if (!authenticated) {
    return <Navigate to="/login" replace />;
  }

  return React.cloneElement(children, { user: authUser });
}

export default PrivateRoute;
