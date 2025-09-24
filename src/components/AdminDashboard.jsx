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
    <div className="flex flex-col gap-5">
      {/* top section */}
      <div>
        <h1>Admin Dashboard</h1>
        <p>
          Manage your learning management system and monitor platform
          performance.
        </p>
      </div>

      {/* cards */}
      <div className="flex gap-3 flex-wrap">
        {topCards.map((item, idx) => {
          const Icon = icons[item.icon];
          return (
            <div key={idx} className="flex-grow basis-[200px]">
              <div>
                <Icon />
                <h2>{item.title}</h2>
              </div>
              <p>{item.bigText}</p>
              <p>{item.green} from last month</p>
            </div>
          );
        })}
      </div>

      <div className="flex gap-4">
        {/* recent Users */}
        <div className="flex-3 flex gap-3 flex-col">
          <div className="flex justify-between">
            <div className="flex gap-3">
              <FaUsers />
              <h2>Recent Users</h2>
            </div>
            <button>+ Add User</button>
          </div>
          <table>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
            {recentUsers.map((item, idx) => {
              return (
                <tr key={idx}>
                  <td>{item?.name}</td>
                  <td>{item?.email}</td>
                  <td>{item?.role}</td>
                  <td>{item?.status}</td>
                  <td>{item?.date}</td>
                  <td>{item?.status}</td>
                </tr>
              );
            })}
          </table>
        </div>

        {/* pending approvals */}
        <div className="flex-1">
          <h2 className="flex gap-3">
            <FaGear /> Pending Approvals
          </h2>
          <div className="flex flex-col gap-3 mt-3">
            {pendingApprovals.map((item) => (
              <div key={item.title}>
                <div className="flex justify-between">
                  <h2>{item.title}</h2>
                  <span>{item.type}</span>
                </div>
                <p>by {item.author}</p>
                <p>by {item.date}</p>
                <div>
                  <button>Approve</button>
                  <button>Reject</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
