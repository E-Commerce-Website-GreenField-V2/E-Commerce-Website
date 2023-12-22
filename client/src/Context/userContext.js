import React, { createContext, useContext, useState } from 'react';

const UserIdContext = createContext();

const UserIdProvider = ({ children }) => {
  const [userId, setUserId] = useState(() => sessionStorage.getItem('userId') || null);

  const setNewUserId = (newUserId) => {
    setUserId(newUserId);
    sessionStorage.setItem('userId', newUserId);
  };


  return (
    <UserIdContext.Provider value={{ userId, setUserId: setNewUserId }}>
      {children}
    </UserIdContext.Provider>
  );
};

const useUserId = () => {
  const context = useContext(UserIdContext);
  if (!context) {
    throw new Error('useUserId must be used within a UserIdProvider');
  }
  return context;
};

export { UserIdProvider, useUserId };
