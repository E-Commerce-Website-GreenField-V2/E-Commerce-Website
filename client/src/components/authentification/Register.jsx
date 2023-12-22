import React from "react";

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
