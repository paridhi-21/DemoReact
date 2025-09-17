// src/components/Layout/AppLayout.tsx

import React from "react";
import { AppBar, Toolbar, Button, Box, Drawer, List, ListItem, ListItemButton, ListItemText, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "@core/context/AppContext";
import { COLORS } from "@core/constants/colors";
import AppTypo from "../AppTypo";
// Define Role type including "guest"
type Role = "guest" | "user" | "vendor" | "admin";

interface SidebarItem {
  label: string;
  path: string;
}

// Ensure the record has all Roles
const sidebarItemsByRole: Record<Role, SidebarItem[]> = {
  guest: [
    { label: "Home", path: "/" },
    { label: "Login", path: "/login" },
    { label: "Register", path: "/register" },
  ],
  user: [
    { label: "Home", path: "/" },
    { label: "My Orders", path: "/orders" },
    { label: "Profile", path: "/profile" },
  ],
  vendor: [
    { label: "Vendor Dashboard", path: "/vendor/dashboard" },
    { label: "Manage Products", path: "/vendor/products" },
    { label: "Orders Received", path: "/vendor/orders" },
    { label: "Profile", path: "/vendor/profile" },
  ],
  admin: [
    { label: "Admin Dashboard", path: "/admin" },
    { label: "Users", path: "/user" },
    { label: "Vendors", path: "/vendor" },
    { label: "Reports", path: "/admin/reports" },
    { label: "Profile", path: "/admin/profile" },
  ],
};

interface AppLayoutProps {
  children: React.ReactNode;
}

const drawerWidth = 240;

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const { isAuthenticated, role: ctxRole, username, logout } = useAppContext();
  const navigate = useNavigate();

  const userRole: Role = isAuthenticated
    ? (ctxRole as Role)   // If you ensure ctxRole is one of these
    : "guest";

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // Now safe index, because userRole is Role
  const sidebarItems: SidebarItem[] = sidebarItemsByRole[userRole];

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {userRole !== "guest" && (
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: COLORS.primary[50],
            },
          }}
        >
          <Toolbar
            sx={{
              backgroundColor: COLORS.accent[500],
              color: COLORS.primary[50],
            }}
          >
            <AppTypo appVariant="h6" noWrap>
              {username}
            </AppTypo>
          </Toolbar>
          <Divider />
          <List>
            {sidebarItems.map((item: SidebarItem) => (
              <ListItem key={item.path} disablePadding>
                <ListItemButton onClick={() => navigate(item.path)}>
                  <ListItemText
                    primary={item.label}
                    sx={{ color: COLORS.accent[700] }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      )}

      <Box
        component="div"
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        <AppBar
          position="static"
          sx={{
            backgroundColor: COLORS.accent[500],
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
        >
          <Toolbar>
         
            
            <AppTypo
              appVariant="h6"
              sx={{ flexGrow: 1, cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              KALAKRATI
            </AppTypo>

            {!isAuthenticated && (
              <>
                <Button color="inherit" onClick={() => navigate("/login")}>
                  Login
                </Button>
                <Button color="inherit" onClick={() => navigate("/register")}>
                  Register
                </Button>
              </>
            )}

            {isAuthenticated && (
              <>
                <AppTypo appVariant="h6" sx={{ mr: 2 }}>
                  {username} ({userRole})
                </AppTypo>
                <Button color="inherit" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>

        <Box sx={{ flexGrow: 1, p: 3, backgroundColor: COLORS.primary[50] }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default AppLayout;
