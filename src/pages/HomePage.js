import React from "react";
import { Link } from "react-router-dom";
import Routes from "../constants/routes";

const HomePage = () => {
  return (
    <div>
      <p>Home</p>
      <Link to={Routes.LOGIN}>To Login</Link>
    </div>
  );
};

export default HomePage;
