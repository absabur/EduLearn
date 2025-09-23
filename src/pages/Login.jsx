// Login.jsx
import { FaBook, FaGraduationCap, FaUsers } from "react-icons/fa";
import ContentCard from "../components/login/ContentCard";
import { DemonLoginButton } from "../components/login/DemonLoginButton";

export default function Login() {
  return (
    <div className="container mx-auto p-6 flex flex-col md:flex-row gap-6 justify-center items-center min-h-screen">
      <div className="hidden lg:flex flex-col items-center justify-center gap-6">
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="bg-secondary w-10 h-10 rounded-xl flex items-center justify-center">
            <FaGraduationCap className="text-2xl text-white " />
          </div>
          <h1 className="text-3xl font-bold mt-4">EduLearn Lms</h1>
          <p className="text-gray-600 w-1/2 text-center">
            Empower education Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ullam, facere?
          </p>
        </div>

        <div className="flex gap-2">
          <ContentCard
            icon={<FaBook />}
            heading={"Interactive Course"}
            content={"Engaging multimedia connent"}
          />
          <ContentCard
            icon={<FaUsers />}
            heading={"Interactive Course"}
            content={"Engaging multimedia connent"}
          />
        </div>
      </div>
      <div className="bg-primary p-6 rounded-lg flex flex-col items-start justify-center gap-3 md:w-1/3">
        <h1 className="text-primary-text font-bold text-3xl text-center w-full">
          Wellcome Back
        </h1>
        <p className="text-secondary-text text-base w-full text-center">Sign in to access your learning dashbroad</p>
        <form className="w-full flex flex-col gap-3 mt-3">
          <label htmlFor="email"> Email</label>
          <input
            id="email"
            type="text"
            placeholder="Username"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="bg-secondary text-white px-4 py-2 rounded mt-4 w-full"
          >
            Sign in
          </button>
        </form>

        <div className=" w-full flex justify-center items-center gap-3 mt-4 ">
          <hr className="flex-1 text-secondary-text" />
          <p className="text-secondary-text">DEMO ACCOUNTS</p>
          <hr className="flex-1 text-secondary-text" />
        </div>
        {/* demo account button */}
        <div className="grid grid-cols-2 gap-3 w-full mt-4">
          <DemonLoginButton role={"student"}>
            <FaGraduationCap className="text-2xl text-blue-500" />
            <p className="text-primary-text font-semibold"> Student</p>
          </DemonLoginButton>

          <DemonLoginButton role={"teacher"}>
            <FaBook className="text-2xl text-green-500" />
            <p className="text-primary-text font-semibold"> Teacher</p>
          </DemonLoginButton>

          <DemonLoginButton role={"admin"}>
            <FaUsers className="text-2xl text-orange-400" />
            <p className="text-primary-text font-semibold"> Admin</p>
          </DemonLoginButton>
        </div>
      </div>
    </div>
  );
}
