
import { createContext, useContext, useReducer } from 'react';
import Cookies from 'js-cookie'

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
        return {
        ...state,
        token: action.payload,
      };
    case 'CLEAR_TOKEN':
        return {
        ...state,
        token : null
        }
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { token: Cookies.get('token') || null });

  const setToken = (token) => {
    Cookies.set('token', token, { expires: 7 }); // here i save the token in the cookies for 7 days
    dispatch({ type: 'SET_TOKEN', payload: token });
  };

  const clearToken = () => { // this function is used to delete the token from the cookies
    Cookies.remove('token');
    dispatch({ type: 'CLEAR_TOKEN' });
  };


  return (
    <AuthContext.Provider value={{ token: state.token, setToken, clearToken }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };