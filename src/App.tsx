// src/App.tsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AppProvider, useAppContext } from "./@core/context/AppContext";
import LoginContainer from "./modules/Auth/LoginContainer";
import VendorDashboardView from "./modules/VendorDashboard/VendorDashboardView";
import UserDashboardView from "./modules/UserDashboard/UserDashboardView";
import AdminDashboardView from "./modules/AdminDashboard/AdminDashboardView";
import HomeContainer from "./modules/Home/HomeContainer";
import AppLayout from "./@core/components/Layout/AppLayout";
import ProtectedLayout from "./@core/layout";

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
            <AppLayout>
              <HomeContainer />
            </AppLayout>
          )
        }
      />

      <Route path="/login" element={<LoginContainer />} />

      <Route element={<ProtectedLayout allowedRoles={["vendor", "admin"]} />}>
        <Route path="/vendor/*" element={<VendorDashboardView />} />
      </Route>

      <Route element={<ProtectedLayout allowedRoles={["admin"]} />}>
        <Route path="/admin/*" element={<AdminDashboardView />} />
      </Route>

      <Route element={<ProtectedLayout allowedRoles={["user", "admin"]} />}>
        <Route path="/user/*" element={<UserDashboardView />} />
      </Route>

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
