import { ThemeProvider, createTheme } from '@mui/material';
import Navbar from './components/Navbar';

const theme = createTheme({
  typography: {},
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
