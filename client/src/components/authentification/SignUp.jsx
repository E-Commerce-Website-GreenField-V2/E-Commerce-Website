import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../src/Context/authContext.jsx";
import "./Register.css";
import RegisterCard from "../Card/RegisterCard/RegisterCard";

function Signup({ setId }) {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      const response = await axios.post("http://localhost:8000/auth/register", {
        fullName: formData.get("fullName"),
        email: formData.get("email"),
        password: formData.get("password"),
      });

      const { email, fullName, token, userId } = response.data;
      console.log("id", userId);

      if (email && fullName && token) {
        setToken(token);
        setId(userId);
        setSuccessMessage("Registration successful!");
        setErrorMessage("");

        navigate(`/login/${userId}`);
      } else {
        setSuccessMessage("");
        setErrorMessage("Registration failed. Please try again.");
      }
    } catch (error) {
      setSuccessMessage("");
      setErrorMessage("Error during registration. Please try again.");
      console.error("Error during registration:", error);
    }
  };

  return (
    // <div className="container">
    //   <div className="form-container">
    //     {/* <img src={image} alt="Lock Icon" className="lock-icon" /> */}
    //     <h2 className="title">Sign up</h2>
    //     <form onSubmit={handleSignup} className="form">
    //       <label className="label">
    //         User Name:
    //         <input type="text" name="fullName" required className="input" />
    //       </label>

    //       <label className="label">
    //         Email Address:
    //         <input type="email" name="email" required className="input" />
    //       </label>
    //       <label className="label">
    //         Password:
    //         <input type="password" name="pas" required className="input" />
    //       </label>
    //       <button type="submit" className="button">
    //         Sign Up
    //       </button>
    //     </form>
    //     {successMessage && (
    //       <div className="success-message">{successMessage}</div>
    //     )}

    //     {errorMessage && <div className="error-message">{errorMessage}</div>}
    //     <p className="create-account-link">
    //       Already have an account? <a href="/">Login here</a>.
    //     </p>
    //   </div>
    // </div>
    <div className="register__auth__container">
      <div className="register__auth">
        <RegisterCard />
      </div>
    </div>
  );
}

export default Signup;
