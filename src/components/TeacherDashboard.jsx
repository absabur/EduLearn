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

export default function TeacherDashboard({ data }) {
  const { name, topCards, myCourses, upcomingClasses, actions } = data;

  return (
    <div className="flex flex-col gap-5">
      {/* top section */}
      <div>
        <h1>Good morning, {name}!</h1>
        <p>You have 2 classes today and 18 assignments to review.</p>
      </div>

      {/* cards */}
      <div className="flex gap-3 flex-wrap">
        {topCards.map((item, idx) => {
          const Icon = icons[item.icon];
          return (
            <div key={idx} className="flex-grow basis-[200px]">
              <div className="flex justify-between">
                <h2>{item.title}</h2>
                <Icon />
              </div>
              <p>{item.bigText}</p>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>

      <div className="flex gap-4">
        {/* my courses */}
        <div className="flex-3 flex gap-3 flex-col">
          <div className="flex justify-between">
            <div className="flex gap-3">
              <FaUsers />
              <h2>Recent Users</h2>
            </div>
            <button>+ New Course</button>
          </div>
          <div className="flex flex-col gap-3">
            {myCourses.map((item) => (
              <div key={item.title}>
                <div className="flex justify-between">
                  <h2>{item.title}</h2>
                  <span>{item.status}</span>
                </div>
                <div className="flex gap-3">
                  <p className="flex gap-2">
                    <FaUser /> {item.students} students
                  </p>
                  <p className="flex gap-2">
                    <FaUser /> {item.assignments} assignments
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="flex gap-2">
                    <FaUser /> Next {item.next}
                  </p>
                  <div className="flex gap-4">
                    <button className="flex gap-3">
                      <FaUser /> View
                    </button>
                    <button className="flex gap-3">
                      <FaUser /> Edit
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-5">
          {/* pending approvals */}
          <div>
            <h2 className="flex gap-3">
              <FaGear /> Upcoming Classes
            </h2>
            <div className="flex flex-col gap-3 mt-3">
              {upcomingClasses.map((item) => (
                <div key={item.title}>
                  <div className="flex justify-between">
                    <h3>{item.title}</h3>
                    <span>{item.day}</span>
                  </div>
                  <p>{item.duration}</p>
                  <div className="flex justify-between">
                    <span>{item.students} students</span>
                    <span>Room {item.room}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* actions */}
          <div>
            <h1>Quick Actions</h1>
            <div className="flex gap-3 flex-col mt-3">
              {actions.map((item) => {
                const Icon = icons[item.icon];
                return (
                  <button key={item.title} className="flex gap-2">
                    <Icon /> <span>{item.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
