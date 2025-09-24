import { FaBook, FaGraduationCap, FaUsers } from "react-icons/fa";
import ContentCard from "../components/login/ContentCard";
import { DemonLoginButton } from "../components/login/DemonLoginButton";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { loginAsync } from "../reduxToolkit/auth/authThunk";
import { toast } from "sonner";
import { clearError } from "../reduxToolkit/auth/authSlice";

export default function Login() {
  const { error } = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email) {
      toast.warning("Enter Email!");
      return;
    }
    if (!password) {
      toast.warning("Enter Password");
      return;
    }
    dispatch(loginAsync({ email, password, role }));
    navigate("/dashboard");
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [error]);

  return (
    <div className="container mx-auto md:p-6 p-2 flex flex-col md:flex-row gap-20 justify-center items-center min-h-screen">
      <div className="flex-1 max-w-[550px] hidden lg:flex flex-col items-center justify-center gap-6">
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="bg-secondary w-20 h-20 rounded-xl flex items-center justify-center">
            <FaGraduationCap className="text-4xl text-white " />
          </div>
          <h1 className="text-3xl font-bold mt-4">EduLearn Lms</h1>
          <p className="text-gray-600 w-100 text-center">
            Empower education Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ullam, facere?
          </p>
        </div>

        <div className="flex gap-5">
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
      <div className="flex-1 max-w-[450px] shadow-xl bg-primary p-6 rounded-lg flex flex-col items-start justify-center gap-3 md:w-1/3">
        <h1 className="text-primary-text font-bold text-3xl text-center w-full">
          Wellcome Back
        </h1>
        <p className="text-primary-text/50 text-base w-full text-center">
          Sign in to access your learning dashbroad
        </p>
        <form
          onSubmit={handleLogin}
          className="w-full flex flex-col gap-3 mt-3"
        >
          <label htmlFor="email"> Email</label>
          <input
            id="email"
            type="text"
            placeholder="Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="bg-secondary text-white px-4 py-4 rounded-lg mt-4 w-full"
          >
            Sign in
          </button>
        </form>

        <div className=" w-full flex justify-center items-center gap-3 mt-4 ">
          <hr className="flex-1 text-primary-text/50" />
          <p className="text-primary-text/50">DEMO ACCOUNTS</p>
          <hr className="flex-1 text-primary-text/50" />
        </div>
        {/* demo account button */}
        <div className="flex flex-wrap gap-3 w-full mt-4">
          <DemonLoginButton
            role={"student"}
            text={"Student"}
            icon={<FaGraduationCap className="text-lg text-blue-500" />}
            setEmail={setEmail}
            setPassword={setPassword}
            setRole={setRole}
          />

          <DemonLoginButton
            role={"teacher"}
            text={"Teacher"}
            icon={<FaBook className="text-lg text-green-500" />}
            setEmail={setEmail}
            setPassword={setPassword}
            setRole={setRole}
          />

          <DemonLoginButton
            role={"admin"}
            text={"Admin"}
            icon={<FaUsers className="text-lg text-orange-400" />}
            setEmail={setEmail}
            setPassword={setPassword}
            setRole={setRole}
          />
        </div>
        <p className="text-primary-text/50 text-base w-full text-center">
          Click demo account to direct login
        </p>
      </div>
    </div>
  );
}
