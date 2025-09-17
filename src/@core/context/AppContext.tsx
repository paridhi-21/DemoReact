// src/context/AppContext.tsx
import React, { createContext, useState, useContext, ReactNode } from "react";

export type UserRole = "user" | "vendor" | "admin" | null;

interface AppContextState {
  role: UserRole;
  isAuthenticated: boolean;
  username: string | null;
  login: (username: string) => void;
  logout: () => void;
}

const defaultState: AppContextState = {
  role: null,
  isAuthenticated: false,
  username: null,
  login: () => {},
  logout: () => {},
};

const AppContext = createContext<AppContextState>(defaultState);
export const useAppContext = () => useContext(AppContext);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize state from localStorage
  const [role, setRole] = useState<UserRole>(() => {
    return (localStorage.getItem("role") as UserRole) || null;
  });
  const [username, setUsername] = useState<string | null>(() => {
    return localStorage.getItem("username") || null;
  });

  const users: Record<string, Exclude<UserRole, null>> = {
    alice: "user",
    bob: "vendor",
    admin: "admin",
  };

  const login = (uname: string): UserRole => {
    const normalized = uname.toLowerCase();
    if (users[normalized]) {
      const userRole = users[normalized];
      setRole(userRole);
      setUsername(uname);

      // ✅ persist to localStorage
      localStorage.setItem("role", userRole);
      localStorage.setItem("username", uname);

      return userRole;
    } else {
      alert("Invalid username! Try: alice, bob, or admin");
      return null;
    }
  };

  const logout = () => {
    setRole(null);
    setUsername(null);

    // ✅ remove from localStorage
    localStorage.removeItem("role");
    localStorage.removeItem("username");
  };

  return (
    <AppContext.Provider
      value={{
        role,
        username,
        isAuthenticated: role !== null,
        login,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
