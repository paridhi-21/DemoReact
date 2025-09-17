import React from "react";
import { Box, Drawer, List, ListItem, ListItemText, Toolbar, AppBar, ListItemButton } from "@mui/material";
import { Link } from "react-router-dom";
import AppTypo from "../AppTypo";

const drawerWidth = 240;

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <AppTypo appVariant="h6" noWrap>
            Admin Dashboard
          </AppTypo>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
        }}
      >
        <Toolbar />
        <List>
            <ListItem disablePadding>
                <ListItemButton component={Link} to="/admin">
                <ListItemText primary="Admin Home" />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton component={Link} to="/user">
                <ListItemText primary="User Dashboard" />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton component={Link} to="/vendor">
                <ListItemText primary="Vendor Dashboard" />
                </ListItemButton>
            </ListItem>
            </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default AdminLayout;
