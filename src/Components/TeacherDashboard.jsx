export default function TeacherDashboard({data}) {
  const { name, stats, courses, upcomingClasses, quickActions } = data;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Welcome, {name}</h1>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {Object.entries(stats).map(([key, value]) => (
          <div
            key={key}
            className="bg-white rounded-2xl shadow p-4 text-center"
          >
            <h2 className="text-xl font-semibold">{value}</h2>
            <p className="capitalize text-gray-500">{key}</p>
          </div>
        ))}
      </div>

      {/* Courses */}
      <div>
        <h2 className="text-xl font-semibold mb-2">My Courses</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {courses.map((c, i) => (
            <div key={i} className="bg-white rounded-2xl shadow p-4">
              <h3 className="font-bold">{c.title}</h3>
              <p className="text-sm text-gray-500">Students: {c.students}</p>
              <p className="text-sm">Assignments: {c.assignments}</p>
              <p className="text-sm">Status: {c.status}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Classes */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Upcoming Classes</h2>
        <ul className="space-y-2">
          {upcomingClasses.map((cls, i) => (
            <li
              key={i}
              className="bg-white p-3 rounded-2xl shadow flex justify-between"
            >
              <span>{cls.title}</span>
              <span className="text-sm text-gray-500">{cls.status}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Quick Actions</h2>
        <div className="flex gap-3">
          {quickActions.map((action, i) => (
            <button
              key={i}
              className="px-4 py-2 bg-blue-500 text-white rounded-xl shadow"
            >
              {action}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
