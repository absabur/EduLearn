import { 
  FaTachometerAlt, 
  FaBookOpen, 
  FaClipboardList, 
  FaGraduationCap, 
  FaCalendarAlt, 
  FaEnvelope, 
  FaUsers, 
  FaChalkboardTeacher, 
  FaCog, 
  FaChartLine 
} from "react-icons/fa";

export const sidebarData = [
  {
    role: "student",
    menus: [
      { title: "Dashboard", path: "/dashboard", icon: FaTachometerAlt },
      { title: "My Courses", path: "/my-courses", icon: FaBookOpen },
      { title: "Assignments", path: "/assignments", icon: FaClipboardList },
      { title: "Grades", path: "/grades", icon: FaGraduationCap },
      { title: "Calendar", path: "/calendar", icon: FaCalendarAlt },
      { title: "Messages", path: "/messages", icon: FaEnvelope },
    ],
  },
  {
    role: "teacher",
    menus: [
      { title: "Dashboard", path: "/dashboard", icon: FaTachometerAlt },
      { title: "My Classes", path: "/my-classes", icon: FaChalkboardTeacher },
      { title: "Assignments", path: "/assignments", icon: FaClipboardList },
      { title: "Messages", path: "/messages", icon: FaEnvelope },
    ],
  },
  {
    role: "admin",
    menus: [
      { title: "Dashboard", path: "/dashboard", icon: FaTachometerAlt },
      { title: "Manage Students", path: "/manage-students", icon: FaUsers },
      { title: "Manage Teachers", path: "/manage-teachers", icon: FaChalkboardTeacher },
      { title: "Reports", path: "/reports", icon: FaChartLine },
      { title: "Settings", path: "/settings", icon: FaCog },
    ],
  },
];
