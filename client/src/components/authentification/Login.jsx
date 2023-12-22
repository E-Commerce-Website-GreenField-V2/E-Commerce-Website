import React from "react";

import LoginCard from "../Card/LoginCard/LoginCard";

import "./Login.css";

function Login() {
  return (
    <div className="login__auth__container">
      <div className="login__auth">
        <LoginCard />
      </div>
    </div>
  );
}

export default Login;
