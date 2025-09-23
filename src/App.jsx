import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const localLoggedIn = localStorage.getItem("isLoggedIn") === "true";
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
            <Dashboard />
          </PrivateRoute>
        }
      />

      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
