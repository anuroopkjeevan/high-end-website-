// src/context/AuthContext.jsx
import React, { createContext, useState, useContext } from 'react';
import { authApi } from '../services/api';

// Create context
const AuthContext = createContext();

// Custom hook
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const refreshUser = async () => {
    const data = await authApi.me();
    setUser(data.user);
    return data.user;
  };

  const login = async (username, password) => {
    setLoading(true);
    try {
      const data = await authApi.login(username, password);
      setUser(data.user);
      return { success: true, user: data.user };
    } catch (error) {
      authApi.clearToken();
      const message =
        error?.response?.data?.detail ||
        "Login failed. Check credentials and staff access.";
      return { success: false, error: message };
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    await authApi.logout();
    setUser(null);
  };

  React.useEffect(() => {
    const bootstrapAuth = async () => {
      try {
        await refreshUser();
      } catch {
        authApi.clearToken();
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    bootstrapAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, refreshUser, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
