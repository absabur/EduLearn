import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const [localLoggedIn, setLocalLoggedIn] = useState(false);
  const [localUser, setLocalUser] = useState(null);

  useEffect(() => {
    try {
      const savedUser = JSON.parse(localStorage.getItem("user"));
      const savedLogin = localStorage.getItem("isLoggedIn") === "true";
      setLocalLoggedIn(savedLogin);
      setLocalUser(savedUser);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const authenticated = isLoggedIn || localLoggedIn;

  return (
    <Routes>
      <Route
        path="/login"
        element={
          authenticated ? <Navigate to="/dashboard" replace /> : <Login />
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
