import React from "react";

export default function StudentDashboard({ data }) {
  const { name, stats, courses, assignments, achievements } = data;

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

      {/* Courses */}
      <div>
        <h2 className="text-xl font-semibold mb-2">My Courses</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {courses.map((c, i) => (
            <div key={i} className="bg-white rounded-2xl shadow p-4">
              <h3 className="font-bold">{c.title}</h3>
              <p className="text-gray-500 text-sm">{c.instructor}</p>
              <p className="text-sm mt-1">Status: {c.status}</p>
              <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${c.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Assignments */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Assignments</h2>
        <ul className="space-y-2">
          {assignments.map((a, i) => (
            <li
              key={i}
              className="bg-white p-3 rounded-2xl shadow flex justify-between items-center"
            >
              <span>{a.title}</span>
              <span className="text-sm text-gray-500">{a.status}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Achievements */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Achievements</h2>
        <ul className="space-y-2">
          {achievements.map((ach, i) => (
            <li key={i} className="bg-white p-3 rounded-2xl shadow">
              🏆 {ach.title} – {ach.course}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
