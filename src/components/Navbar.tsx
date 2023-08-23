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
  Divider,
} from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useThemeContext } from '../theme/ThemeContextProvider';
import DownloadResumeButton from './styles/DownloadResumeButton.styled';

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
                sx={{
                  height: theme.spacing(4),
                }}
              >
                <IconButton size="large" edge="start" onClick={toggleColorMode}>
                  {mode === 'light' ? (
                    <LightModeIcon sx={{ color: theme.palette.text.primary }} />
                  ) : (
                    <DarkModeIcon sx={{ color: theme.palette.text.primary }} />
                  )}
                </IconButton>
                <DownloadResumeButton>Download Resume</DownloadResumeButton>
              </Stack>
            </Stack>
            {isSmallScreen ? null : (
              <IconButton
                size="large"
                onClick={toggleDrawer}
                sx={{ marginLeft: theme.spacing(1) }}
              >
                <MenuIcon
                  sx={{
                    color: theme.palette.text.primary,
                  }}
                />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={isOpen}
        onClose={toggleDrawer}
        sx={{
          bgcolor: theme.palette.secondary.main,
        }}
      >
        <Container>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              paddingY: theme.spacing(1),
              width: `min(80vw, ${theme.breakpoints.values.sm}px)`,
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                color: theme.palette.text.primary,
                fontWeight: 600,
                flexGrow: 1,
                whiteSpace: 'nowrap',
                alignSelf: 'center',
              }}
            >
              {'<BRADY__SAVARIE />'}
            </Typography>
            <IconButton size="large" onClick={toggleDrawer}>
              <CloseIcon />
            </IconButton>
          </Stack>
        </Container>
        <Divider role="presentation" variant="fullWidth" />
        <Container
          sx={{
            paddingY: theme.spacing(2),
          }}
        >
          <Stack
            direction="column"
            spacing={1}
            sx={{
              alignItems: 'left',
            }}
          >
            <NavLink to="/">
              <Button
                sx={{
                  color: theme.palette.text.secondary,
                }}
              >
                Projects
              </Button>
            </NavLink>
            <NavLink to="/">
              <Button
                sx={{
                  color: theme.palette.text.secondary,
                }}
              >
                About
              </Button>
            </NavLink>
            <NavLink to="/">
              <Button
                sx={{
                  color: theme.palette.text.secondary,
                }}
              >
                Skills
              </Button>
            </NavLink>
            <NavLink to="/">
              <Button
                sx={{
                  color: theme.palette.text.secondary,
                }}
              >
                Contacts
              </Button>
            </NavLink>
          </Stack>
        </Container>
        <Divider role="presentation" variant="fullWidth" />
        <Container>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              paddingY: theme.spacing(1),
              marginX: theme.spacing(1),
            }}
          >
            <Typography
              variant="body1"
              component="div"
              sx={{
                color: theme.palette.text.primary,
                flexGrow: 1,
                whiteSpace: 'nowrap',
                alignSelf: 'center',
              }}
            >
              Switch Color Mode
            </Typography>
            <IconButton size="large" edge="start" onClick={toggleColorMode}>
              {mode === 'light' ? (
                <LightModeIcon sx={{ color: theme.palette.text.primary }} />
              ) : (
                <DarkModeIcon sx={{ color: theme.palette.text.primary }} />
              )}
            </IconButton>
          </Stack>
          <Container
            sx={{
              paddingY: theme.spacing(1),
              marginX: theme.spacing(1),
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <DownloadResumeButton>Download Resume</DownloadResumeButton>
          </Container>
        </Container>
      </Drawer>
    </>
  );
}
