import { PaletteMode } from '@mui/material';
import { deepOrange, grey } from '@mui/material/colors';

const getDesignTokens = (mode: PaletteMode) => ({
  shape: {
    borderRadius: 3.5,
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
          divider: deepOrange[700],
          background: {
            default: deepOrange[900],
            paper: deepOrange[900],
          },
          text: {
            primary: '#fff',
            secondary: grey[500],
          },
        }),
  },
});

export default getDesignTokens;
