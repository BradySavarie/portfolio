import { CssBaseline, ThemeProvider } from '@mui/material';
import { useThemeContext } from './theme/ThemeContextProvider';
import Navbar from './components/Navbar';

function App() {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
