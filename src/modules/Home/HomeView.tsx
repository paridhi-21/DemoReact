// src/views/HomePage.tsx

import React from "react";
import { Container, Grid, Button, Box } from "@mui/material";
import { COLORS } from "@core/constants/colors";
import AppTypo from "@demo-react/@core/components/AppTypo";
import AppLayout from "@demo-react/@core/components/Layout/AppLayout";
import { useAppContext } from "@demo-react/@core/context/AppContext";

const HomePage: React.FC = () => {
    const { isAuthenticated, role } = useAppContext();
   console.log("isAuthenticated :",isAuthenticated);
   console.log("role :",role);
   
    
  return (
    // <AppLayout>
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: "center",
            py: 8,
            backgroundColor: COLORS.primary[100],
            borderRadius: 2,
          }}
        >
          <AppTypo appVariant="h3" sx={{ color: COLORS.accent[500], mb: 2, fontWeight: 700 }}>
            Welcome to KalaKrati Jewels
          </AppTypo>
          <AppTypo appVariant="h6" sx={{ color: COLORS.grey[700], mb: 4, fontStyle: "italic" }}>
            Where elegance meets craftsmanship — discover jewellery as unique as you are.
          </AppTypo>
          <Button
            variant="contained"
            sx={{
              backgroundColor: COLORS.secondary[500],
              color: COLORS.primary[50],
              fontSize: { xs: "1rem", md: "1.25rem" },
              px: 4,
              py: 1.5,
              "&:hover": {
                backgroundColor: COLORS.secondary[600],
              },
            }}
            onClick={() => {
              // navigate to collections or shop
            }}
          >
            Explore Our Collections
          </Button>
        </Box>

        <Grid container spacing={4} sx={{ mt: 6 }}>
          <Grid size={{xs:12, sm:6, md:4}}>
            <Box
              sx={{
                backgroundColor: COLORS.primary[50],
                padding: 2,
                borderRadius: 2,
                boxShadow: 3,
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <img
                src="/images/rings.jpg"
                alt="Rings"
                style={{ width: "100%", height: "auto", borderRadius: 8 }}
              />
              <AppTypo appVariant="h6" sx={{ color: COLORS.accent[600], mt: 2, fontWeight: 600 }}>
                Finest Rings
              </AppTypo>
            </Box>
          </Grid>
          <Grid size={{xs:12, sm:6, md:4}}>
            <Box
              sx={{
                backgroundColor: COLORS.primary[50],
                padding: 2,
                borderRadius: 2,
                boxShadow: 3,
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <img
                src="/images/necklaces.jpg"
                alt="Necklaces"
                style={{ width: "100%", height: "auto", borderRadius: 8 }}
              />
              <AppTypo appVariant="h6" sx={{ color: COLORS.accent[600], mt: 2, fontWeight: 600 }}>
                Elegant Necklaces
              </AppTypo>
            </Box>
          </Grid>
          <Grid size={{xs:12, sm:6, md:4}}>
            <Box
              sx={{
                backgroundColor: COLORS.primary[50],
                padding: 2,
                borderRadius: 2,
                boxShadow: 3,
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <img
                src="/images/earrings.jpg"
                alt="Earrings"
                style={{ width: "100%", height: "auto", borderRadius: 8 }}
              />
              <AppTypo appVariant="h6" sx={{ color: COLORS.accent[600], mt: 2, fontWeight: 600 }}>
                Statement Earrings
              </AppTypo>
            </Box>
          </Grid>
        </Grid>

        {/* Featured Products / Best Sellers */}
        <Box sx={{ backgroundColor: COLORS.primary[50], py: 6 }}>
          <Container maxWidth="lg">
            <AppTypo appVariant="h4" sx={{ color: COLORS.accent[500], mb: 4, textAlign: "center" }}>
              Best Loved Pieces
            </AppTypo>
            <Grid container spacing={4}>
              {/* Replace these with real data */}
              {[
                { name: "Regal Diamond Ring", price: "$299", image: "/images/ring1.jpg" },
                { name: "Pearl Drop Necklace", price: "$349", image: "/images/necklace1.jpg" },
                { name: "Golden Hoop Earrings", price: "$199", image: "/images/earring1.jpg" },
              ].map((prod, idx) => (
                <Grid size={{xs:12, sm:6, md:4}}  key= {idx}  >
                  <Box
                    sx={{
                      borderRadius: 2,
                      overflow: "hidden",
                      boxShadow: 3,
                      backgroundColor: COLORS.primary[50],
                      "&:hover": {
                        boxShadow: 6,
                        border: `2px solid ${COLORS.secondary[500]}`,
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={prod.image}
                      alt={prod.name}
                      sx={{ width: "100%", height: 240, objectFit: "cover" }}
                    />
                    <Box sx={{ p: 2 }}>
                      <AppTypo appVariant="h6" sx={{ mb: 1, color: COLORS.accent[800] }}>
                        {prod.name}
                      </AppTypo>
                      <AppTypo appVariant="bodyLg" sx={{ color: COLORS.secondary[700], mb: 2 }}>
                        {prod.price}
                      </AppTypo>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: COLORS.accent[500],
                          color: COLORS.primary[50],
                          "&:hover": { backgroundColor: COLORS.accent[600] },
                        }}
                      >
                        View Details
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* About / Craftsmanship */}
        <Box sx={{ backgroundColor: COLORS.primary[100], py: 6, mt: 6 }}>
          <Container maxWidth="md">
            <AppTypo appVariant="h4" sx={{ color: COLORS.accent[600], mb: 2, textAlign: "center" }}>
              Our Craftsmanship
            </AppTypo>
            <AppTypo appVariant="bodyLg" sx={{ color: COLORS.grey[800], textAlign: "center", lineHeight: 1.6 }}>
              At LuxAura Jewels, every piece is handcrafted by skilled artisans who honour tradition and precision. We source only ethically mined materials and precious metals to ensure your jewellery isn't just beautiful — it's conscientious, timeless, and made to last a lifetime.
            </AppTypo>
          </Container>
        </Box>

      </Container>
    // </AppLayout>
  );
};

export default HomePage;
