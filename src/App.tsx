// src/App.tsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AppProvider, useAppContext } from "./context/AppContext";
import LoginContainer from "./modules/Auth/LoginContainer";
import VendorDashboardView from "./modules/VendorDashboard/VendorDashboardView";
import UserDashboardView from "./modules/UserDashboard/UserDashboardView";
import AdminDashboardView from "./modules/AdminDashboard/AdminDashboardView";
import HomeContainer from "./modules/Home/HomeContainer";

const ProtectedRoute: React.FC<{
  allowedRoles: string[];
  children: React.ReactNode;
}> = ({ allowedRoles, children }) => {
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

  return <>{children}</>;
};

const AppRoutes: React.FC = () => {
  const { isAuthenticated, role } = useAppContext();

  return (
    <Routes>
      <Route
        path="/"
        element={
          isAuthenticated ? (
            role === "admin" ? (
              <Navigate to="/admin" replace />
            ) : role === "vendor" ? (
              <Navigate to="/vendor" replace />
            ) : role === "user" ? (
              <Navigate to="/user" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          ) : (
            <HomeContainer />
          )
        }
      />

      <Route path="/login" element={<LoginContainer />} />

      <Route
        path="/vendor/*"
        element={
          <ProtectedRoute allowedRoles={["vendor"]}>
            <VendorDashboardView />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/*"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminDashboardView />
          </ProtectedRoute>
        }
      />

      <Route
        path="/user/*"
        element={
          <ProtectedRoute allowedRoles={["user"]}>
            <UserDashboardView />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AppProvider>
  );
};

export default App;
