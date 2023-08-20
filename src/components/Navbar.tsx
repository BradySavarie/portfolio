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
  const { theme, mode, toggleColorMode } = useThemeContext();
  return (
    <AppBar
      position="static"
      sx={{ bgcolor: theme.palette.secondary.main, boxShadow: 'none' }}
    >
      <Toolbar sx={{ maxWidth: '1280px' }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            color: theme.palette.text.primary,
            fontWeight: 600,
          }}
        >
          {'<BRADY__SAVARIE />'}
        </Typography>
        <Stack direction="row" spacing={3}>
          <Stack direction="row" spacing={2}>
            <NavLink to="/">
              <Button sx={{ color: theme.palette.text.secondary }}>
                Projects
              </Button>
            </NavLink>
            <NavLink to="/">
              <Button sx={{ color: theme.palette.text.secondary }}>
                About
              </Button>
            </NavLink>
            <NavLink to="/">
              <Button sx={{ color: theme.palette.text.secondary }}>
                Skills
              </Button>
            </NavLink>
            <NavLink to="/">
              <Button sx={{ color: theme.palette.text.secondary }}>
                Contacts
              </Button>
            </NavLink>
          </Stack>
          <Stack direction="row" spacing={2} sx={{ height: theme.spacing(4) }}>
            <IconButton size="large" edge="start" onClick={toggleColorMode}>
              {mode === 'light' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
            <Button
              sx={{
                bgcolor: theme.palette.text.primary,
                color: theme.palette.secondary.main,
                borderRadius: theme.shape.borderRadius,
                px: theme.spacing(2),
                py: theme.spacing(1),
                lineHeight: 1,
              }}
            >
              Download Resume
            </Button>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
