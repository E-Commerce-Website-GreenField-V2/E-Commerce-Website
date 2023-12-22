import React from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../../src/Context/authContext.jsx";
import "./Register.css";
import RegisterCard from "../Card/RegisterCard/RegisterCard";

function Register() {
  return (
    <div className="register__auth__container">
      <div className="register__auth">
        <RegisterCard />
      </div>
    </div>
  );
}

export default Register;
