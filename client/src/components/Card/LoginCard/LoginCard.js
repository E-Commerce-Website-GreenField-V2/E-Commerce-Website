import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../../Context/authContext.jsx';
import './LoginCard.css';

const LoginCard = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      setLoading(true);
      const response = await axios.post("http://localhost:8000/auth/login", {
        email: formData.get("email"),
        password: formData.get("password"),
      });
      console.log(response.data);
      const { token, userId } = response.data;

      if (userId && token) {
        setToken(token);
        setErrorMessage("");
        setLoading(false);
        navigate(`/`);
      } else {
        setErrorMessage("Login failed. Please check your credentials.");
        setLoading(false);
      }
    } catch (error) {
      setErrorMessage("Error during login. Please try again.");
      setLoading(false);
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="login__card__container">
      <div className="login__card">
        <div className="login__header">
          <h1>Login</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="login__inputs">
            <div className="email__input__container input__container">
              <label className="email__label input__label">Email</label>
              <input name="email" type="email" className="email__input login__input" placeholder='example@gmail.com' />
            </div>
            <div className="password__input__container input__container">
              <label className="password__label input__label">Password</label>
              <input name="password" type="password" className="password__input login__input" placeholder='**********' />
            </div>
            <div className="login__button__container">
              <button type="submit" className="login__button">LOGIN</button>
            </div>
          </div>
        </form>
        <div className="login__other__actions">
          <div className="login__forgot__password">Forgot password?</div>
          <div className="login__new__account">Don't have an account? <Link to="/account/register">Create account</Link></div>
        </div>
        {errorMessage && <div className="login__error-message">{errorMessage}</div>}
      </div>
    </div>
  );
}

export default LoginCard;
