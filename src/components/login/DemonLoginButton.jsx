import { useEffect } from "react";
import accounts from "../../assets/demoAccount";

export const DemonLoginButton = ({
  role,
  icon,
  text,
  setEmail,
  setPassword,
  setRole,
}) => {
  const setEmailPassword = () => {
    setEmail(accounts[role].email);
    setPassword(accounts[role].password);
    setRole(role);
  };

  return (
    <button
      onClick={() => setEmailPassword(email, password)}
      className="flex-grow basis-[140px] bg-secondary-text/15 border border-secondary-text/25 px-4 py-3 rounded-2xl w-full flex flex-col items-center justify-center gap-1 cursor-pointer "
    >
      {icon}
      <p className="text-primary-text font-semibold text-xs"> {text}</p>
    </button>
  );
};
