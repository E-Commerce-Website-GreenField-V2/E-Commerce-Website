import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../store/authContext.jsx'

function Login() {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  


  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:8000/auth/login', {
        email: formData.get('email'),
        password: formData.get('password'),
      });
      const {token, userId} = response.data;

      if (userId && token) {
        const { token } = response.data;
        setToken(token);
        setErrorMessage('');
        setLoading(false);
        // Redirect user to the home page after successful login
        // setId(userId)
        navigate(`/Home/${userId}`);
      } else {
        setErrorMessage('Login failed. Please check your credentials.');
        setLoading(false);
      }
    } catch (error) {
      setErrorMessage('Error during login. Please try again.');
      setLoading(false);
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="title">Login</h2>
        <form onSubmit={handleSubmit} className="form">
          <label className="label">
            Email Address:
            <input type="email" name="email" required className="input" />
          </label>
          <label className="label">
            Password:
            <input type="password" name="password" required className="input" />
          </label>
          <button type="submit" className="button" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        {errorMessage && (
          <div className="error-message">
            {errorMessage}
          </div>
        )}

        <p className="create-account-link">
          Don't have an account? <a href="/signup">Sign up here</a>.
        </p>
      </div>
    </div>
  );
}

export default Login;
