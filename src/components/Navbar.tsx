import {
  Stack,
  Container,
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { NavLink } from 'react-router-dom';
import { useThemeContext } from '../theme/ThemeContextProvider';

export default function Navbar() {
  const { theme, mode, toggleColorMode } = useThemeContext();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: theme.palette.secondary.main,
          boxShadow: 'none',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{
                color: theme.palette.text.primary,
                fontWeight: 600,
                flexGrow: 1,
              }}
            >
              {'<BRADY__SAVARIE />'}
            </Typography>
            <Stack direction="row" spacing={3} sx={{ marginLeft: 'auto' }}>
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
              <Stack
                direction="row"
                spacing={2}
                sx={{ height: theme.spacing(4) }}
              >
                <IconButton size="large" edge="start" onClick={toggleColorMode}>
                  {mode === 'light' ? (
                    <LightModeIcon sx={{ color: theme.palette.text.primary }} />
                  ) : (
                    <DarkModeIcon sx={{ color: theme.palette.text.primary }} />
                  )}
                </IconButton>
                <Button
                  sx={{
                    bgcolor: theme.palette.text.primary,
                    color: theme.palette.secondary.main,
                    borderRadius: theme.shape.borderRadius,
                    px: theme.spacing(2),
                    py: theme.spacing(1),
                  }}
                >
                  Download Resume
                </Button>
              </Stack>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
