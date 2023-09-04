import { CssBaseline, ThemeProvider } from '@mui/material';
import { useThemeContext } from './theme/ThemeContextProvider';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Home />
      <Projects />
      <Technologies />
      <About />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
