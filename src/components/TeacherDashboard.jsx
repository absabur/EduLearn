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
    <div className="flex flex-col gap-5 p-2 md:p-5">
      {/* top section */}
      <div className="bg-gradient-to-r from-secondary/10 to-primary-text/10 rounded-lg py-4 px-4 space-y-2">
        <h1 className="text-3xl font-semibold">Good morning, {name}!</h1>
        <p className="text-primary-text/50">
          You have 2 classes today and 18 assignments to review.
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
                <h2 className="font-semibold mb-2">{item.title}</h2>
                <Icon />
              </div>
              <p className="text-2xl font-bold">{item.bigText}</p>
              <p className="text-primary-text/50 text-sm">{item.text}</p>
            </div>
          );
        })}
      </div>

      <div className="flex gap-5 flex-wrap">
        {/* my courses */}
        <div className="flex-3 flex flex-col bg-primary p-5 rounded-lg border border-secondary-text/50">
          <div className="flex items-center justify-between mb-5 items-center gap-3">
            <div className="flex items-center gap-3 text-2xl font-semibold">
              <FaUsers />
              <h2>My Courses</h2>
            </div>
            <button className="text-xs font-semibold rounded-lg bg-secondary text-primary border border-secondary-text/50 py-2 px-3">
              + New Course
            </button>
          </div>

          <div className="flex flex-col gap-5">
            {myCourses.map((item) => (
              <div
                key={item.title}
                className="border border-secondary-text/50 p-4 rounded-lg"
              >
                <div className="flex justify-between items-start gap-3">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <span
                    className={`text-xs flex items-center font-semibold rounded-xl py-1 px-3 ${
                      item.status == "Active"
                        ? "bg-secondary text-primary"
                        : "bg-secondary-text/20"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                <div className="flex gap-3 text-primary-text/50  text-sm">
                  <p className="flex gap-1 items-center">
                    <FaUser /> {item.students} students
                  </p>
                  <p className="flex gap-1 items-center">
                    <FaUser /> {item.assignments} assignments
                  </p>
                </div>
                <div className="flex justify-between mt-2 text-primary-text/50 items-center gap-3 text-sm">
                  <p className="flex gap-1 items-center">
                    <FaUser /> Next: {item.next}
                  </p>
                  <div className="flex gap-3">
                    <button className="text-xs font-semibold flex gap-2 items-center rounded-lg bg-secondary-text/20 border border-secondary-text/50 py-2 px-3 text-primary-text">
                      <FaUser /> View
                    </button>
                    <button className="text-xs font-semibold flex gap-2 items-center rounded-lg bg-secondary-text/20 border border-secondary-text/50 py-2 px-3 text-primary-text">
                      <FaUser /> Edit
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* right section */}
        <div className="flex-1 flex flex-col gap-5">
          {/* upcoming classes */}
          <div className="flex flex-col bg-primary p-5 rounded-lg border border-secondary-text/50">
            <h2 className="flex items-center gap-3 text-xl font-semibold">
              <FaGear /> Upcoming Classes
            </h2>
            <div className="flex flex-col gap-5 mt-3">
              {upcomingClasses.map((item) => (
                <div
                  key={item.title}
                  className="border border-secondary-text/50 p-4 rounded-lg"
                >
                  <div className="text-sm flex justify-between mb-2 gap-3 items-start">
                    <h3 className="font-semibold">{item.title}</h3>
                    <span className="text-xs px-3 py-1 rounded-xl bg-secondary-text/20 border border-secondary-text/50">
                      {item.day}
                    </span>
                  </div>
                  <p className="text-xs text-primary-text/50">
                    {item.duration}
                  </p>
                  <div className="flex justify-between text-primary-text/50 text-xs items-center gap-3">
                    <span>{item.students} students</span>
                    <span>Room {item.room}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* quick actions */}
          <div className="bg-primary border border-secondary-text/50 p-5 rounded-lg">
            <h2 className="text-lg font-semibold mb-5">Quick Actions</h2>
            <div className="flex flex-col gap-3">
              {actions.map((item) => {
                const Icon = icons[item.icon];
                return (
                  <button
                    key={item.title}
                    className="flex items-center gap-2 text-sm font-semibold rounded-lg bg-secondary-text/20 border border-secondary-text/50 py-2 px-3"
                  >
                    <Icon /> {item.title}
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
