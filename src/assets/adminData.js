const adminData = {
  name: "Mike Admin",
  role: "admin",
  stats: {
    totalStudents: 1247,
    activeTeachers: 84,
    totalCourses: 156,
    enrollmentRate: "89%",
  },
  recentUsers: [
    { name: "Emma Wilson", email: "emma@example.com", role: "Student", status: "Active", joined: "2024-01-10" },
    { name: "David Brown", email: "david@example.com", role: "Teacher", status: "Active", joined: "2024-01-08" },
    { name: "Lisa Chen", email: "lisa@example.com", role: "Student", status: "Pending", joined: "2024-01-12" },
    { name: "Mark Johnson", email: "mark@example.com", role: "Student", status: "Active", joined: "2024-01-11" },
  ],
  pendingApprovals: [
    { title: "Mobile App Development", by: "John Smith", type: "Course", date: "2024-01-12" },
    { title: "Teacher Application", by: "Alice Cooper", type: "Teacher", date: "2024-01-11" },
    { title: "Assignment Update", by: "Bob Wilson", type: "Content", date: "2024-01-10" },
  ],
  systemHealth: {
    uptime: "99.9%",
    responseTime: "120ms",
    errors: "Low",
  },
  coursePerformance: [
    { title: "Advanced React Development", enrollments: 45, completionRate: "78%" },
    { title: "JavaScript Fundamentals", enrollments: 38, completionRate: "65%" },
  ],
};

export default adminData;
