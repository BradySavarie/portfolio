import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useThemeContext } from '../theme/ThemeContextProvider';

export default function Navbar() {
  const { mode, toggleColorMode } = useThemeContext();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {'<BRADY__SAVARIE />'}
        </Typography>
        <Stack direction="row" spacing={2}>
          <NavLink to="/">
            <Button color="inherit">Projects</Button>
          </NavLink>
          <NavLink to="/">
            <Button color="inherit">About</Button>
          </NavLink>
          <NavLink to="/">
            <Button color="inherit">Skills</Button>
          </NavLink>
          <NavLink to="/">
            <Button color="inherit">Contacts</Button>
          </NavLink>
        </Stack>
        <IconButton size="large" edge="start" onClick={toggleColorMode}>
          {mode === 'light' ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
        <Button color="inherit">Download Resume</Button>
      </Toolbar>
    </AppBar>
  );
}
