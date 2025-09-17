// src/@core/layout/ProtectedLayout.tsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppContext } from "./context/AppContext";


interface ProtectedLayoutProps {
  allowedRoles: string[];
}

const ProtectedLayout: React.FC<ProtectedLayoutProps> = ({ allowedRoles }) => {
  const { isAuthenticated, role } = useAppContext();

  if (!isAuthenticated || !role) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(role)) {
    if (role === "admin") return <Navigate to="/admin" replace />;
    if (role === "vendor") return <Navigate to="/vendor" replace />;
    if (role === "user") return <Navigate to="/user" replace />;
    return <Navigate to="/" replace />;
  }

  return (
    // <AppLayout>
      <Outlet />
    // {/* </AppLayout> */}
  );
};

export default ProtectedLayout;
