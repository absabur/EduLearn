const teacherData = {
  name: "Sarah Teacher",
  role: "teacher",
  stats: {
    totalCourses: 3,
    activeCourses: 2,
    draftCourses: 1,
    totalStudents: 57,
    pendingReviews: 18,
    classesToday: 2,
  },
  courses: [
    {
      title: "Advanced React Development",
      students: 24,
      assignments: 3,
      nextClass: "2024-01-15T10:00:00",
      status: "Active",
    },
    {
      title: "JavaScript Fundamentals",
      students: 18,
      assignments: 2,
      nextClass: "2024-01-16T14:00:00",
      status: "Active",
    },
    {
      title: "Web Design Basics",
      students: 15,
      assignments: 1,
      nextClass: "2024-01-17T11:00:00",
      status: "Draft",
    },
  ],
  upcomingClasses: [
    {
      title: "Advanced React Development",
      date: "2024-01-15T10:00:00",
      room: "Room A101",
      status: "Today",
    },
    {
      title: "JavaScript Fundamentals",
      date: "2024-01-16T14:00:00",
      room: "Room B205",
      status: "Tomorrow",
    },
  ],
  quickActions: ["Create New Course", "Create Assignment", "Manage Students"],
};

export default teacherData;
