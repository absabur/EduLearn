// Login.jsx
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../Redux_Toolkit/slices/authSlice";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (role) => {
    dispatch(login({ role, password: "1234" }));
    navigate("/dashboard");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Login Page</h1>
      <div className="flex gap-3">
        <button
          onClick={() => handleLogin("student")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Student Login
        </button>
        <button
          onClick={() => handleLogin("teacher")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Teacher Login
        </button>
        <button
          onClick={() => handleLogin("admin")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Admin Login
        </button>
      </div>
    </div>
  );
}
