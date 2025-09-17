import React from "react";
import { Container, Box, Paper } from "@mui/material";

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Container maxWidth="sm">
      <Box display="flex" alignItems="center" justifyContent="center" minHeight="100vh">
        <Paper elevation={3} sx={{ p: 4, width: "100%" }}>
          {children}
        </Paper>
      </Box>
    </Container>
  );
};

export default AuthLayout;
