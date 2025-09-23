import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { loginAsync } from "../../reduxToolkit/auth/authThunk";

export const DemonLoginButton = ({ role, icon, text }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (role) => {
    dispatch(loginAsync({ role, password: "1234" }));
    navigate("/dashboard");
  };
  return (
    <button
      onClick={() => handleLogin(role)}
      className="bg-secondary-text/15 border border-secondary-text/25 px-4 py-3 rounded-2xl w-full flex flex-col items-center justify-center gap-1 cursor-pointer "
    >
      {icon}
      <p className="text-primary-text font-semibold text-xs"> {text}</p>
    </button>
  );
};
