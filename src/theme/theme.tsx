import { PaletteMode } from '@mui/material';
import { deepOrange, grey } from '@mui/material/colors';

const getDesignTokens = (mode: PaletteMode) => ({
  shape: {
    borderRadius: '12.25px',
  },
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: { main: '#FB472A' },
          secondary: { main: '#F8F7F4' },
          text: {
            primary: '#111827',
            secondary: '#4B5563',
          },
        }
      : {
          // palette values for dark mode
          primary: deepOrange,
          secondary: { main: '#121212' },
          text: {
            primary: '#fff',
            secondary: '#F8F7F4',
          },
        }),
  },
  typography: {
    fontFamily: "'Inter', 'sans-serif'",
  },
});

export default getDesignTokens;
