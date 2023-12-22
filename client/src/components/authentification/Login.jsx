import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/authContext.jsx";
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
