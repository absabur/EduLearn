// Dashboard.jsx
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../reduxToolkit/auth/authSlice";
import { useEffect } from "react";
import StudentDashboard from "../components/StudentDashboard";
import AdminDashboard from "../components/AdminDashboard";
import TeacherDashboard from "../components/TeacherDashboard";
import { fetchDashboard } from "../reduxToolkit/dashboard/dashboardThunk";

export default function Dashboard({ user }) {
  const { items, loading } = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchDashboard(user?.role));
  }, [user]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="p-6">
      {items?.role == "student" && <StudentDashboard data={items} />}
      {items?.role == "admin" && <AdminDashboard data={items} />}
      {items?.role == "teacher" && <TeacherDashboard data={items} />}
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded mt-4"
      >
        Logout
      </button>
    </div>
  );
}
