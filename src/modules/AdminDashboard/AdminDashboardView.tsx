// src/views/DashboardPage.tsx

import React from "react";
import { Typography, Container, Grid, Box, Button } from "@mui/material";
import AppLayout from "@core/components/Layout/AppLayout";
import { useAppContext } from "@core/context/AppContext";
import { COLORS } from "@core/constants/colors";

const DashboardPage: React.FC = () => {
  const { role } = useAppContext();

  return (
    <AppLayout>
      
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ color: COLORS.accent[500], mb: 4 }}>
          {role?.toUpperCase()} Dashboard
        </Typography>

        <Grid container spacing={4}>
          {role === "admin" && (
            <>
              <Grid size={{ xs: 12, sm: 6, md: 4}}>
                <Box
                  sx={{
                    p: 3,
                    backgroundColor: COLORS.primary[100],
                    borderRadius: 2,
                    boxShadow: 2,
                    textAlign: "center",
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 2 }}>Manage Users</Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: COLORS.accent[500],
                      color: COLORS.primary[50],
                      "&:hover": { backgroundColor: COLORS.accent[600] },
                    }}
                    onClick={() => {
                      /* navigate to users page */
                    }}
                  >
                    Go
                  </Button>
                </Box>
              </Grid>
            </>
          )}
        </Grid>
      </Container>
    </AppLayout>
  );
};

export default DashboardPage;
