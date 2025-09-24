import {
  FaUser,
  FaBook,
  FaChalkboardTeacher,
  FaClipboard,
  FaUsers,
} from "react-icons/fa";

import { FaGear } from "react-icons/fa6";

const icons = {
  FaUser: FaUser,
  FaBook: FaBook,
  FaChalkboardTeacher: FaChalkboardTeacher,
  FaClipboard: FaClipboard,
};

export default function AdminDashboard({ data }) {
  const { topCards, recentUsers, pendingApprovals } = data;

  return (
    <div className="flex flex-col gap-5 p-2 md:p-5">
      {/* top section */}
      <div className="bg-gradient-to-r from-secondary/10 to-primary-text/10 rounded-lg py-4 px-4 space-y-2">
        <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
        <p className="text-primary-text/50">
          Manage your learning management system and monitor platform
          performance.
        </p>
      </div>

      {/* cards */}
      <div className="flex flex-wrap gap-5">
        {topCards.map((item, idx) => {
          const Icon = icons[item.icon];
          return (
            <div
              key={idx}
              className="flex-grow basis-[200px] bg-primary p-5 rounded-lg border border-secondary-text/50"
            >
              <div className="flex justify-between items-center gap-3">
                <h2 className="font-semibold mb-3">{item.title}</h2>
                <Icon />
              </div>
              <p className="text-2xl font-bold">{item.bigText}</p>
              <p className="text-xs">
                <span className="text-green-600">{item.green}</span> from last
                month
              </p>
            </div>
          );
        })}
      </div>

      <div className="w-full flex gap-5 flex-wrap">
        {/* recent users */}
        <div className="min-w-[300px] md:min-w-[500px] flex-6 min-w-0 flex flex-col bg-primary p-5 rounded-lg border border-secondary-text/50">
          <div className="flex items-center justify-between mb-5 gap-3">
            <div className="flex items-center gap-3 text-2xl font-semibold">
              <FaUsers />
              <h2>Recent Users</h2>
            </div>
            <button className="text-xs font-semibold rounded-lg bg-secondary text-primary border border-secondary-text/50 py-2 px-3">
              + Add User
            </button>
          </div>

          {/* 🔑 scroll wrapper */}
          <div className="overflow-x-auto">
            <table className="min-w-[700px] w-full text-sm border-collapse">
              <tr className="text-left text-primary-text/50">
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Role</th>
                <th className="p-3">Status</th>
                <th className="p-3">Date</th>
                <th className="p-3">Action</th>
              </tr>
              {recentUsers.map((item, idx) => (
                <tr
                  key={idx}
                  className="border-t border-secondary-text/30 hover:bg-secondary-text/10"
                >
                  <td className="p-3 whitespace-nowrap">{item?.name}</td>
                  <td className="p-3 whitespace-nowrap">{item?.email}</td>
                  <td className="p-3">
                    <span
                      className={`w-fit text-xs flex items-center font-semibold rounded-xl py-1 px-3 ${
                        item.role == "Teacher"
                          ? "bg-secondary text-primary"
                          : "bg-secondary-text/20 text-primary-text/50"
                      }`}
                    >
                      {item?.role}
                    </span>
                  </td>
                  <td className="p-3">
                    <span
                      className={`w-fit text-xs flex items-center font-semibold rounded-xl py-1 px-3 ${
                        item.status == "Active"
                          ? "bg-secondary text-primary"
                          : "bg-secondary-text/20 text-primary-text/50"
                      }`}
                    >
                      {item?.status}
                    </span>
                  </td>
                  <td className="p-3 whitespace-nowrap">{item?.date}</td>
                  <td className="p-3 flex gap-1">
                    <button className="text-xs font-semibold rounded-lg bg-secondary-text/20 border border-secondary-text/50 px-3 py-1">
                      Edit
                    </button>
                    <button className="text-xs font-semibold rounded-lg bg-secondary-text/20 border border-secondary-text/50 px-3 py-1">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>

        {/* pending approvals */}
        <div className="flex-3 flex flex-col bg-primary p-5 rounded-lg border border-secondary-text/50">
          <h2 className="flex items-center gap-3 text-xl font-semibold mb-3">
            <FaGear /> Pending Approvals
          </h2>
          <div className="flex flex-col gap-5 mt-2">
            {pendingApprovals.map((item) => (
              <div
                key={item.title}
                className="border border-secondary-text/50 p-4 rounded-lg"
              >
                <div className="flex justify-between mb-2 items-start">
                  <h3 className="text-md font-semibold">{item.title}</h3>
                  <span className="text-xs px-3 py-1 rounded-xl bg-secondary-text/20 border border-secondary-text/50">
                    {item.type}
                  </span>
                </div>
                <p className="text-xs text-primary-text/50 mb-1">
                  by {item.author}
                </p>
                <p className="text-xs text-primary-text/50 mb-3">{item.date}</p>
                <div className="flex gap-3">
                  <button className="text-xs font-semibold rounded-lg bg-green-500/20 border border-green-500/50 py-1 px-3">
                    Approve
                  </button>
                  <button className="text-xs font-semibold rounded-lg bg-red-500/20 border border-red-500/50 py-1 px-3">
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
