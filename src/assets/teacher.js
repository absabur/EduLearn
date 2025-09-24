const teacherStaticData = {
  name: "Sarah",
  role: "teacher",
  topCards: [
    {
      title: "My Courses",
      icon: "FaUser",
      bigText: 3,
      text: "2 active, 1 draft",
    },
    {
      title: "Total Students",
      icon: "FaUser",
      bigText: 57,
      text: "Across all course",
    },
    {
      title: "Pending Reviews",
      icon: "FaUser",
      bigText: 18,
      text: "Assignments to grade",
    },
    {
      title: "Classes Today",
      icon: "FaUser",
      bigText: 2,
      text: "Next at 10:00 AM",
    },
  ],
  myCourses: [
    {
      title: "Advanced React Development",
      students: 24,
      assignments: 3,
      status: "Active",
      next: "2024-01-15 10:00 AM",
    },
    {
      title: "JavaScript Fundamentals",
      students: 18,
      assignments: 2,
      status: "Active",
      next: "2024-01-16 02:00 AM",
    },
    {
      title: "Web Design Basics",
      students: 15,
      assignments: 1,
      status: "Draft",
      next: "2024-01-17 11:00 AM",
    },
  ],
  upcomingClasses: [
    {
      title: "React Component Assignment",
      day: "Today",
      duration: "10:00 AM - 11:30 AM",
      students: 24,
      room: "A101",
    },
    {
      title: "JavaScript Fundamentals",
      day: "Tommorrow",
      duration: "02:00 PM - 03:30 PM",
      students: 18,
      room: "B205",
    },
  ],
  actions: [
    {
      icon: "FaUser",
      title: "Create New Course",
    },
    {
      icon: "FaUser",
      title: "Create Assignment",
    },
    {
      icon: "FaUser",
      title: "Manage Students",
    },
  ],
};

export default teacherStaticData;
