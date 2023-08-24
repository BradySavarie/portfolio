import { PaletteMode } from '@mui/material';

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
          primary: { main: '#FB472A' },
          secondary: { main: '#121212' },
          text: {
            primary: '#F8F7F4',
            secondary: '#FFFFFF',
          },
        }),
  },
  typography: {
    fontFamily: "'Inter', 'sans-serif'",
  },
});

export default getDesignTokens;
