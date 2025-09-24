// Dashboard.jsx
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../reduxToolkit/auth/authSlice";
import { useEffect, useState } from "react";
import StudentDashboard from "../components/StudentDashboard";
import AdminDashboard from "../components/AdminDashboard";
import TeacherDashboard from "../components/TeacherDashboard";
import { fetchDashboard } from "../reduxToolkit/dashboard/dashboardThunk";
import SideBar from "../components/dashbroad/SideBar";
import { MdMenu } from "react-icons/md";
import { BiCross } from "react-icons/bi";
import { CgCross } from "react-icons/cg";
import { GiTireIronCross } from "react-icons/gi";

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

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex gap-3">
      <div
        className={`${
          sidebarOpen ? "left-0" : "-left-[269px]"
        } fixed md:static  md:flex-3 lg:flex-1 bg-primary transition-all duration-300 `}
      >
        <SideBar />
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="md:hidden p-2 text-2xl m-2 fixed top-0 right-0"
        >
          {sidebarOpen ? <GiTireIronCross /> : <MdMenu />}
        </button>
      </div>

      {/* side bar for mobail device */}

      {/* <div>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="md:hidden p-2  text-2xl bg-primary text-white rounded"
        >
          <MdMenu />
        </button>
      </div> */}

      <div className="w-full md:flex-5 lg:flex-6">
        {items?.role == "student" && <StudentDashboard data={items} />}
        {items?.role == "admin" && <AdminDashboard data={items} />}
        {items?.role == "teacher" && <TeacherDashboard data={items} />}
      </div>
      {/* <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded mt-4"
      >
        Logout
      </button> */}
    </div>
  );
}
