import {
  Stack,
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  useMediaQuery,
} from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useThemeContext } from '../theme/ThemeContextProvider';

export default function Navbar() {
  const { theme, mode, toggleColorMode } = useThemeContext();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isSmallScreen = useMediaQuery(theme.breakpoints.up('md'));

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
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
                whiteSpace: 'nowrap',
              }}
            >
              {'<BRADY__SAVARIE />'}
            </Typography>
            <Stack
              direction="row"
              spacing={3}
              display={{ xs: 'none', sm: 'flex' }}
              sx={{ marginLeft: 'auto' }}
            >
              <Stack
                direction="row"
                spacing={2}
                display={{ xs: 'none', md: 'flex' }}
              >
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
                    whiteSpace: 'nowrap',
                  }}
                >
                  Download Resume
                </Button>
              </Stack>
            </Stack>
            {isSmallScreen ? null : (
              <IconButton size="large" onClick={toggleDrawer}>
                <MenuIcon
                  sx={{
                    color: theme.palette.text.primary,
                    marginLeft: theme.spacing(1),
                  }}
                />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer}>
        <Container
          sx={{
            minWidth: '80vw',
          }}
        />
      </Drawer>
    </>
  );
}
