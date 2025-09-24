import { FaGraduationCap, FaHome } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import { logout } from "../../reduxToolkit/auth/authSlice";
import { sidebarData } from "../../assets/sidebarData";

const SideBar = ({ role }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const menus = sidebarData.find((item) => item.role === role)?.menus || [];

  return (
    <div className="h-dvh p-3 relative">
      <div className="flex items-center gap-3 my-6">
        <div className="bg-secondary text-white w-12 h-12 flex items-center justify-center rounded-2xl text-3xl">
          <FaGraduationCap />
        </div>
        <div className="flex flex-col ">
          <p className="text-primary-text font-semibold">EduLearn</p>
          <p className="text-xs">Learinng Management System</p>
        </div>
      </div>
      <p>Navigation</p>
      <div className="flex flex-col gap-2 mt-3">
        {menus.map((menu, index) => {
          const Icon = menu.icon;
          return (
            <Link
              to={"#"}
              key={index}
              className="flex gap-2 items-center text-primary-text/70 px-1.5 py-0.5"
            >
              <Icon /> <p>{menu.title}</p>
            </Link>
          );
        })}
      </div>
      <div className="mt-6">
        <p>Ouick Access</p>
        <div className="flex flex-col gap-2 mt-3 ">
          <Link
            to={"3"}
            className="flex justify-between items-center gap-3 items-center text-primary-text/70"
          >
            <div className="flex gap-2 items-center px-1.5 py-0.5 rounded-lg">
              <FaHome /> <p>Dashboard</p>
            </div>
            <div className="bg-secondary h-5 w-5 rounded-full text-white p-2.5 text-sm flex items-center justify-center">
              3
            </div>
          </Link>
        </div>
      </div>

      <div className="flex justify-between items-center absolute bottom-0 w-full left-0 p-3">
        <div className="flex items-center gap-3 ">
          <div className="w-10 h-10 rounded-full bg-secondary"></div>
          <div>
            <p className="text-primary-text/70 text-md font-semibold">
              Jhon Student
            </p>
            <p className="text-xs text-primary-text/50">Student</p>
          </div>
        </div>
        <div>
          <button
            onClick={handleLogout}
            className="bg-secondary p-2 text-white rounded-full"
          >
            <LuLogOut />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
