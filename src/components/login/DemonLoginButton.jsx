import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { loginAsync } from "../../reduxToolkit/auth/authThunk";

export const DemonLoginButton = ({role,children}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (role) => {
    dispatch(loginAsync({ role, password: "1234" }));
    navigate("/dashboard");
  };
  return (
    <button
      onClick={() => handleLogin(role)}
      className="bg-secondary-text/25 px-4 py-4 rounded-2xl w-full flex flex-col items-center justify-center gap-2 cursor-pointer "
    >
      {children}
    </button>
  );
};
