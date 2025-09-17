import React, { useEffect } from "react";
import { useAppContext } from "../../@core/context/AppContext";
import { useNavigate } from "react-router-dom";
import LoginView from "./LoginView";

const LoginContainer: React.FC = () => {
  const { role, isAuthenticated } = useAppContext();
  const navigate = useNavigate();

  // Redirect whenever authentication succeeds
  useEffect(() => {
    if (isAuthenticated && role) {
      if (role === "user") navigate("/user");
      if (role === "vendor") navigate("/vendor");
      if (role === "admin") navigate("/admin");
    }
  }, [isAuthenticated, role, navigate]);

  return (
    <LoginView/>
  );
};

export default LoginContainer;
