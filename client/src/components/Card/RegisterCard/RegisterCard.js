import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './RegisterCard.css';

const RegisterCard = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "User", // Default role is User
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRoleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignup = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/auth/register", formData);
      console.log("res",response.data);

      const { email, fullName } = response.data;
      

      if (email && fullName) {
        setSuccessMessage("Registration successful!");
        setErrorMessage("");

        navigate(`/account/login`);
        
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
    <div className="register__card__container">
      <div className="register__card">
        <div className="register__header">
          <h1>Create Account</h1>
        </div>
        <form onSubmit={handleSignup}>
          <div className="register__inputs">
            <div className="fname__input__container reg__input__container">
              <label className="fname__label input__label">Full name</label>
              <input
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleInputChange}
                className="fname__input register__input"
              />
            </div>
            <div className="email__input__container reg__input__container">
              <label className="email__label input__label">Email</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className="email__input register__input"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="password__input__container reg__input__container">
              <label className="password__label input__label">Password</label>
              <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                className="password__input register__input"
              />
            </div>
            <div className="role__dropdown__container reg__input__container">
              <label className="role__label input__label">Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleRoleChange}
                className="role__dropdown"
              >
                <option value="User">User</option>
                <option value="Seller">Seller</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <div className="register__button__container">
              <button type="submit" className="register__button">
                Create Account
              </button>
            </div>
          </div>
        </form>
        <div className="register__other__actions">
          <div className="register__login__account">
            Already have an account? <Link to="/account/login">Login</Link>
          </div>
        </div>
        {errorMessage && <div className="register__error-message">{errorMessage}</div>}
        {successMessage && <div className="register__success-message">{successMessage}</div>}
      </div>
    </div>
  );
};

export default RegisterCard;
