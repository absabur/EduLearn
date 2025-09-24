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

export default function StudentDashboard({ data }) {
  const { name, topCards, myCourses, upcomingAssignments, achievements } = data;

  return (
    <div className="flex flex-col gap-5">
      {/* top section */}
      <div className="bg-gradient-to-r from-secondary/10 to-primary-text/10 rounded py-4 px-4 space-y-2">
        <h1 className="text-3xl font-semibold">Welcome back, {name}!</h1>
        <p className="text-primary-text/50">
          Continue your learning journey. You have 2 upcoming assignments.
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
              <div className="flex justify-between">
                <h2 className="font-semibold mb-3">{item.title}</h2>
                <Icon />
              </div>
              <p className="text-2xl font-bold">{item.bigText}</p>
              <p className="text-primary-text/50">{item.text}</p>
            </div>
          );
        })}
      </div>

      <div className="flex gap-5">
        {/* recent Users */}
        <div className="flex-3 flex flex-col bg-primary p-5 rounded-lg border border-secondary-text/50">
          <div className="flex items-center gap-5 text-2xl font-semibold mb-5">
            <FaUsers />
            <h2>My Courses</h2>
          </div>
          <div className="flex flex-col gap-5">
            {myCourses.map((item) => (
              <div
                key={item.title}
                className="border border-secondary-text/50 p-4 rounded-lg"
              >
                <div className="flex justify-between">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <span className="text-xs flex items-center font-semibold rounded-xl py-1 px-3 bg-secondary-text/20">
                    {item.status}
                  </span>
                </div>
                <p className="text-primary-text/50 mb-3">by {item.author}</p>
                <div>
                  <div className="flex justify-between">
                    <span className="text-primary-text/50">Progress</span>
                    <span className="">{item.percentage}%</span>
                  </div>
                  <div className="h-2 mt-1 rounded w-full bg-primary-text/20 overflow-hidden">
                    <div
                      className="h-2 bg-secondary"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-3 text-primary-text/50">
                    <p className="flex gap-1 items-center">
                      <FaUser /> Next: {item.next}
                    </p>
                    <button className="text-xs font-semibold flex gap-3 items-center rounded-2xl bg-secondary-text/20 border border-secondary-text/50 py-2 px-3">
                      <FaUser /> Continue
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1">
          {/* pending approvals */}
          <div className="flex flex-col bg-primary p-5 rounded-lg border border-secondary-text/50">
            <h2 className="flex items-center gap-5 text-xl font-semibold">
              <FaGear /> Upcoming Assingments
            </h2>
            <div className="flex flex-col gap-5 mt-3">
              {upcomingAssignments.map((item) => (
                <div
                  className="border border-secondary-text/50 p-4 rounded-lg"
                  key={item.title}
                >
                  <div className="text-sm flex justify-between gap-5 mb-2">
                    <h2 className="font-semibold">{item.title}</h2>
                    <span
                      className="text-primary bg-secondary-text/20 text-xs px-3 py-1 rounded-xl border border-secondary-text/50"
                      style={{
                        background: `${
                          item.status == "pending" ? "red" : "purple"
                        }`,
                      }}
                    >
                      {item.status}
                    </span>
                  </div>
                  <p className="text-xs text-primary-text/50">{item.text}</p>
                  <p className="text-xs flex text-primary-text/50 mt-2">
                    <FaUser /> Due: {item.due}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 bg-primary border border-secondary-text/50 p-5 rounded-lg">
            <h2 className="flex items-center gap-3 text-lg font-semibold mb-5">
              <FaUser /> Recent Achivements
            </h2>
            {achievements.map((item) => (
              <div key={item.title} className="flex gap-3 mt-3 items-center">
                <div className="h-8 w-8 flex items-center justify-center text-secondary/60 rounded-full bg-secondary/20">
                  <FaUser />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">{item.comment}</h3>
                  <p className="text-xs text-primary-text/60">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
