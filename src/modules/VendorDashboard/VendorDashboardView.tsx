// src/views/DashboardPage.tsx

import React from "react";
import { Container, Grid, Box, Button } from "@mui/material";
import { COLORS } from "@core/constants/colors";
import { useAppContext } from "@demo-react/@core/context/AppContext";
import AppTypo from "@demo-react/@core/components/AppTypo";
import AppLayout from "@demo-react/@core/components/Layout/AppLayout";

const DashboardPage: React.FC = () => {
  const { role } = useAppContext();

  return (
    <AppLayout>
      <Container maxWidth="lg">
        <AppTypo appVariant="h4" sx={{ color: COLORS.accent[500], mb: 4 }}>
          {role?.toUpperCase()} Dashboard
        </AppTypo>

        <Grid container spacing={4}>
          {/* Example cards / quick actions */}
          {role === "vendor" && (
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
                  <AppTypo appVariant="h6" sx={{ mb: 2 }}>
                    Add New Product
                  </AppTypo>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: COLORS.accent[500],
                      color: COLORS.primary[50],
                      "&:hover": { backgroundColor: COLORS.accent[600] },
                    }}
                    onClick={() => {
                      /* navigate to add product page */
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
