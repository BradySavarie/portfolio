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

  const scrollToContact = (id: string) => {
    const sectionHeader = document.getElementById(`${id}`);
    if (sectionHeader) {
      sectionHeader.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          bgcolor: theme.palette.secondary.main,
          boxShadow: 'none',
        }}
        style={{ backgroundImage: 'none' }}
      >
        <Container maxWidth="lg">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 600,
                flexGrow: 1,
                whiteSpace: 'nowrap',
                color: theme.palette.text.primary,
                '&:hover': {
                  cursor: 'pointer',
                },
              }}
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
              }
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
                <Button
                  onClick={() => scrollToContact('projects')}
                  sx={{ color: theme.palette.text.secondary }}
                >
                  Projects
                </Button>

                <Button
                  onClick={() => {
                    scrollToContact('technologies');
                  }}
                  sx={{ color: theme.palette.text.secondary }}
                >
                  Technologies
                </Button>

                <Button
                  onClick={() => scrollToContact('about')}
                  sx={{ color: theme.palette.text.secondary }}
                >
                  About
                </Button>

                <Button
                  onClick={() => scrollToContact('contact')}
                  sx={{ color: theme.palette.text.secondary }}
                >
                  Contact
                </Button>
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
        PaperProps={{
          sx: {
            bgcolor: theme.palette.secondary.main,
          },
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
            <Button
              onClick={() => {
                toggleDrawer();
                scrollToContact('projects');
              }}
              sx={{
                width: 'min-content',
                color: theme.palette.text.secondary,
              }}
            >
              Projects
            </Button>

            <Button
              onClick={() => {
                toggleDrawer();
                scrollToContact('about');
              }}
              sx={{
                width: 'min-content',
                color: theme.palette.text.secondary,
              }}
            >
              About
            </Button>

            <Button
              onClick={() => {
                toggleDrawer();
                scrollToContact('technologies');
              }}
              sx={{
                width: 'min-content',
                color: theme.palette.text.secondary,
              }}
            >
              Technologies
            </Button>

            <Button
              onClick={() => {
                toggleDrawer();
                scrollToContact('contact');
              }}
              sx={{
                width: 'min-content',
                color: theme.palette.text.secondary,
              }}
            >
              Contact
            </Button>
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
