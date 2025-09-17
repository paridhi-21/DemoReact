import { createTheme } from '@mui/material/styles';
import { palette } from './palette';
import { components } from './components'; // Import components
import { shape } from './shape';

export const theme = createTheme({
  palette,
  components,
  shape,
});