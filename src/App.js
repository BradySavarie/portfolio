import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useThemeContext } from './theme/ThemeContextProvider';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
    const { theme } = useThemeContext();
    return (_jsxs(ThemeProvider, { theme: theme, children: [_jsx(CssBaseline, {}), _jsx(Navbar, {}), _jsx(Home, {}), _jsx(Projects, {}), _jsx(Technologies, {}), _jsx(About, {}), _jsx(Contact, {}), _jsx(Footer, {})] }));
}
export default App;
