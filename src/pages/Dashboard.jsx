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
import { GiTireIronCross } from "react-icons/gi";

export default function Dashboard({ user }) {
  const { items, loading } = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDashboard(user?.role));
  }, [user]);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex gap-3">
      <div
        className={`${
          sidebarOpen ? "left-0" : "-left-[269px]"
        } fixed md:static  md:flex-3 lg:flex-1 bg-primary border-r border-secondary-text/50  transition-all duration-300  transition-all duration-300`}
      >
        <SideBar role={user.role} />
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

      <div className="w-full md:flex-5 lg:flex-7 xl:flex-5">
        {items?.role == "student" && <StudentDashboard data={items} />}
        {items?.role == "admin" && <AdminDashboard data={items} />}
        {items?.role == "teacher" && <TeacherDashboard data={items} />}
      </div>
    </div>
  );
}
