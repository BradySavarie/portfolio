import { PaletteMode } from '@mui/material';

const getDesignTokens = (mode: PaletteMode) => ({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
  shape: {
    borderRadius: '12.25px',
  },
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: { main: '#FB472A', light: '#F9FAFB' },
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
            primary: '#FFFFFF',
            secondary: '#F8F7F4',
          },
        }),
  },
  typography: {
    fontFamily: "'Inter', 'sans-serif'",

    h1: {
      '@media (min-width:600px)': {
        fontSize: '60px',
        fontWeight: 700,
        lineHeight: '72px',
      },
      '@media (max-width: 600px)': {
        fontSize: '30px',
        fontWeight: 700,
        lineHeight: '36px',
      },
    },
    h2: {
      '@media (min-width:600px)': {
        fontSize: '30px',
        fontWeight: 600,
        lineHeight: '36px',
      },
      '@media (max-width: 600px)': {
        fontSize: '24px',
        fontWeight: 600,
        lineHeight: '32px',
      },
    },
    body1: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '24px',
    },
    body2: {
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '20px',
    },
    subtitle1: {
      fontSize: '20px',
      fontWeight: 400,
      lineHeight: '28px',
    },
    subtitle2: {
      fontSize: '20px',
      fontWeight: 600,
      lineHeight: '28px',
    },
  },
});

export default getDesignTokens;
