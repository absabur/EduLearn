// Dashboard.jsx
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../Redux_Toolkit/slices/authSlice";
import { fetchDashboard } from "../Redux_Toolkit/slices/dashboardSlice";
import { useEffect } from "react";
import StudentDashboard from "./StudentDashboard";
import AdminDashboard from "./AdminDashboard";
import TeacherDashboard from "./TeacherDashboard";

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
