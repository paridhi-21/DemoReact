import React, { useState } from 'react';
import { Container, Grid, Box, Stack } from '@mui/material';
import AppTextField from '../../@core/components/AppTextField';
import AppButton from '../../@core/components/AppButton';
import { COLORS } from '@core/constants/colors';
import { useAppContext } from '../../@core/context/AppContext'; // Adjust path if needed
import AppTypo from '@demo-react/@core/components/AppTypo';
import { useNavigate } from 'react-router-dom';



const LoginView: React.FC = () => {
  const { login } = useAppContext();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('amélielaurent762@gmail.com');
  const [password, setPassword] = useState('12345678');
  const navigate = useNavigate();


  const handleSubmit = () => {
    login(username); // Use fullName as username for login
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: COLORS.primary[300], display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Container maxWidth="xl">
        <AppTypo appVariant="h6" sx={{ color: COLORS.grey[500], mb: 2 }} onClick={() => navigate("/")}>KALAKRUTI</AppTypo>
        <Box sx={{ borderRadius: 4, overflow: 'hidden', boxShadow: COLORS.grey[300] }}>
          <Grid container spacing={0} alignItems="stretch">
            {/* Form Section (Left) */}
            <Grid
              size={{ xs: 12, sm: 6, md: 4 }}
              sx={{ backgroundColor: COLORS.primary[200] }}
            >
              <Stack spacing={3} sx={{ p: 4 }}>
                <AppTypo appVariant="h4" gutterBottom sx={{ color: COLORS.grey[900] }}>
                  Let's Get You In!
                </AppTypo>
                <AppTypo appVariant="bodyLg" gutterBottom sx={{ color: COLORS.grey[700], mb: 4 }}>
                  Quick and easy access to your personalized experience.
                </AppTypo>
                <AppTextField
                  label="Full name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  fieldVariant="dark"
                  sx={{ backgroundColor: COLORS.primary[100] }}
                />
                <AppTextField
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fieldVariant="dark"
                  sx={{ backgroundColor: COLORS.primary[100] }}
                />
                <AppTextField
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fieldVariant="dark"
                  sx={{ backgroundColor: COLORS.primary[100] }}
                />
                <AppButton
                  btnVariant="filledLight"
                  onClick={handleSubmit}
                  sx={{ backgroundColor: COLORS.secondary[200], color: COLORS.grey[900], '&:hover': { backgroundColor: COLORS.secondary[400] } }}
                >
                  Login
                </AppButton>
                <Stack direction="row" spacing={2} justifyContent="center">
                  <AppButton
                    btnVariant="outlinedDark"
                    sx={{ color: COLORS.grey[900], borderColor: COLORS.grey[400], '&:hover': { borderColor: COLORS.grey[600] } }}
                  >
                    Apple
                  </AppButton>
                  <AppButton
                    btnVariant="outlinedDark"
                    sx={{ color: COLORS.grey[900], borderColor: COLORS.grey[400], '&:hover': { borderColor: COLORS.grey[600] } }}
                  >
                    Google
                  </AppButton>
                </Stack>
                <AppTypo appVariant="bodyLg" sx={{ color: COLORS.grey[700], textAlign: 'center', mt: 2 }}>
                  Want to create new account? <span style={{ color: COLORS.accent[500] }}>Sign Up</span>
                </AppTypo>
                <AppTypo appVariant="bodyLg" sx={{ color: COLORS.grey[700], textAlign: 'center' }}>
                  Terms & Conditions
                </AppTypo>
              </Stack>
            </Grid>

            {/* Image/Content Section (Right) */}
            <Grid size={{ xs: 12, sm: 6, md: 8 }}>
              <Box
                sx={{
                  position: 'relative',
                  height: '100%',
                  minHeight: { xs: '400px', md: '600px' }, // Increased height
                  backgroundImage: `url('https://cdn.dribbble.com/userupload/44146366/file/original-355a62144a72009e1eb4cf1b57bb7b1e.webp?resize=1024x768&vertical=center')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: COLORS.secondary[50],
                    opacity: 0,
                  },
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default LoginView;