const studentData = {
  name: "John Student",
  role: "student",
  stats: {
    enrolledCourses: 3,
    completed: 1,
    studyHours: 24,
    averageGrade: "A-",
  },
  courses: [
    {
      title: "Advanced React Development",
      instructor: "Sarah Johnson",
      progress: 75,
      status: "In Progress",
      nextClass: "2024-01-15T10:00:00",
    },
    {
      title: "UI/UX Design Principles",
      instructor: "Mike Chen",
      progress: 45,
      status: "In Progress",
      nextClass: "2024-01-16T14:00:00",
    },
    {
      title: "Database Management",
      instructor: "Alex Rodriguez",
      progress: 100,
      status: "Completed",
      nextClass: null,
    },
  ],
  assignments: [
    {
      title: "React Component Assignment",
      course: "Advanced React Development",
      due: "2024-01-20",
      status: "pending",
    },
    {
      title: "Wireframe Design Project",
      course: "UI/UX Design Principles",
      due: "2024-01-22",
      status: "submitted",
    },
  ],
  achievements: [
    { title: "Course Completed", course: "Database Management" },
    { title: "Perfect Score", course: "React Assignment" },
  ],
};

export default studentData;
