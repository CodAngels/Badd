import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const mockApiCall = (email, password) => {
    // Replace this with your actual API call to your backend server
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'test@example.com' && password === 'password') {
          resolve({ email: 'test@example.com', name: 'John Doe' });
        } else {
          reject('Invalid email or password');
        }
      }, 1000);
    });
  };

  const register = async (email, password) => {
    try {
      // Replace this with the actual API call to register a new user
      const newUser = await mockApiCall(email, password);
      setUser(newUser);
    } catch (error) {
      console.error('Sign Up failed:', error);
    }
  };

  const login = async (email, password) => {
    try {
    //replace with the actual API call to log in a new user
      const loggedInUser = await mockApiCall(email, password);
      setUser(loggedInUser);
    } catch (error) {
      console.error('Sign In failed:', error);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
