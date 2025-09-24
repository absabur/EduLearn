import React from "react";
import { FaGraduationCap, FaHome } from "react-icons/fa";
import { Link } from "react-router";

const SideBar = () => {
  return (
    <div className="h-dvh p-3">
      <div className="flex items-center gap-3 my-6">
        <div className="bg-secondary text-white w-12 h-12 flex items-center justify-center rounded-2xl text-3xl">
          <FaGraduationCap />
        </div>
        <p className="flex flex-col ">
          <p className="text-primary-text font-semibold">EduLearn</p>
          <p className="text-xs">Learinng Management System</p>
        </p>
      </div>
      <p>Navigation</p>
      <div className="flex flex-col gap-2 mt-3">
        <Link
          to={"#"}
          className="flex gap-2 items-center text-white bg-secondary px-1.5 py-0.5 rounded-lg"
        >
          <FaHome /> <p>Dashboard</p>
        </Link>
        <Link
          to={"#"}
          className="flex gap-2 items-center text-primary-text/70 px-1.5 py-0.5"
        >
          <FaHome /> <p>Dashboard</p>
        </Link>
        <Link
          to={"#"}
          className="flex gap-2 items-center text-primary-text/70 px-1.5 py-0.5"
        >
          <FaHome /> <p>Dashboard</p>
        </Link>
        <Link
          to={"#"}
          className="flex gap-2 items-center text-primary-text/70 px-1.5 py-0.5"
        >
          <FaHome /> <p>Dashboard</p>
        </Link>
        <Link
          to={"#"}
          className="flex gap-2 items-center text-primary-text/70 px-1.5 py-0.5"
        >
          <FaHome /> <p>Dashboard</p>
        </Link>
        <Link
          to={"#"}
          className="flex gap-2 items-center text-primary-text/70 px-1.5 py-0.5"
        >
          <FaHome /> <p>Dashboard</p>
        </Link>
      </div>
      <div className="mt-6">
        <p>Ouick Access</p>
        <div className="flex flex-col gap-2 mt-3 ">
          <Link to={"3"} className="flex justify-between items-center text-primary-text/70">
            {" "}
            <div className="flex gap-2 items-center px-1.5 py-0.5 rounded-lg">
              <FaHome /> <p>Dashboard</p>
            </div>
            <div className="bg-secondary h-5 w-5 rounded-full text-white p-2.5 text-sm flex items-center justify-center">
              3
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
