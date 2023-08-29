import { CssBaseline, ThemeProvider } from '@mui/material';
import { useThemeContext } from './theme/ThemeContextProvider';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';

function App() {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Home />
      <Projects />
    </ThemeProvider>
  );
}

export default App;
