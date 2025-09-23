export default function AdminDashboard({ data }) {
  const {
    name,
    stats,
    recentUsers,
    pendingApprovals,
    systemHealth,
    coursePerformance,
  } = data;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Welcome, {name}</h1>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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

      {/* Recent Users */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Recent Users</h2>
        <table className="w-full bg-white rounded-2xl shadow">
          <thead>
            <tr className="text-left bg-gray-100">
              <th className="p-2">Name</th>
              <th className="p-2">Role</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {recentUsers.map((u, i) => (
              <tr key={i} className="border-t">
                <td className="p-2">{u.name}</td>
                <td className="p-2">{u.role}</td>
                <td className="p-2 text-gray-500">{u.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pending Approvals */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Pending Approvals</h2>
        <ul className="space-y-2">
          {pendingApprovals.map((p, i) => (
            <li
              key={i}
              className="bg-white p-3 rounded-2xl shadow flex justify-between"
            >
              <span>
                {p.title} – {p.type}
              </span>
              <span className="text-sm text-gray-500">{p.date}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* System Health */}
      <div>
        <h2 className="text-xl font-semibold mb-2">System Health</h2>
        <div className="grid grid-cols-3 gap-4">
          {Object.entries(systemHealth).map(([key, value]) => (
            <div
              key={key}
              className="bg-white rounded-2xl shadow p-4 text-center"
            >
              <h2 className="text-xl font-semibold">{value}</h2>
              <p className="capitalize text-gray-500">{key}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Course Performance */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Course Performance</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {coursePerformance.map((c, i) => (
            <div key={i} className="bg-white rounded-2xl shadow p-4">
              <h3 className="font-bold">{c.title}</h3>
              <p>Enrollments: {c.enrollments}</p>
              <p>Completion Rate: {c.completionRate}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
