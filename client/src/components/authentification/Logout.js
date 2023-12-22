// LogoutUtility.js

import { useAuth } from '../../Context/authContext.jsx';
import { useUserId } from '../../Context/userContext.js'; 
import { useNavigate } from 'react-router-dom';

const LogoutUtility = () => {
  const { clearToken } = useAuth();
  const { clearUserId } = useUserId();
  const navigate = useNavigate()

  const handleLogout = () => {
    // Clear token from cookies
    clearToken();

    // Clear userId from session storage
    clearUserId();

    // Redirect to the login page
    navigate('/account/login');
  };

  return handleLogout;
};

export default LogoutUtility;
