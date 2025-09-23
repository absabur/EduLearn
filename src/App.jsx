import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import GuestRoute from "./components/GuestRoute";
import { setAuth } from "./reduxToolkit/auth/authSlice";

function App() {
  const { user } = useSelector((state) => state.auth);
  const [localUser, setLocalUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const savedUser = JSON.parse(localStorage.getItem("user"));
      const savedLogin = localStorage.getItem("isLoggedIn") === "true";
      dispatch(setAuth({ isLoggedIn: savedLogin, user: savedUser }));
      setLocalUser(savedUser);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Routes>
      <Route
        path="/login"
        element={
          <GuestRoute>
            <Login />
          </GuestRoute>
        }
      />

      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard user={user || localUser} />
          </PrivateRoute>
        }
      />

      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
