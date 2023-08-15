import { createContext, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import Navbar from './components/Navbar';
import { useColorMode, ColorModeProvider } from './context/ColorModeContext';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  const { colorMode } = useColorMode();

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: colorMode,
          ...(colorMode === 'light'
            ? {
                // palette values for light mode
                primary: {
                  main: '#FFFFFF',
                },
              }
            : {
                // palette values for dark mode
                primary: {
                  main: '#E3E3E3',
                },
              }),
        },
      }),
    [colorMode]
  );

  return (
    <ColorModeProvider>
      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>
    </ColorModeProvider>
  );
}

export default App;
