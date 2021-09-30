import React from "react";
import LoginForm from "../components/LoginForm";
import Routes from "../constants/routes";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <LoginForm />
      <Link exact to={Routes.DASHBOARD}>
        To Dashboard
      </Link>
    </div>
  );
};

export default LoginPage;
