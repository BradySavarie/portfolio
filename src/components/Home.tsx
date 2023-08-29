import {
  Box,
  Grid,
  Stack,
  Typography,
  Container,
  IconButton,
  useMediaQuery,
  Link,
} from '@mui/material';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import { useThemeContext } from '../theme/ThemeContextProvider';
import StatusIndicator from './styles/StatusIndicator.styled';
import linkedInIcon__light from '../assets/linkedInIcon__light.svg';
import linkedInIcon__dark from '../assets/linkedInIcon__dark.svg';
import githubIcon__light from '../assets/githubIcon__light.svg';
import githubIcon__dark from '../assets/githubIcon__dark.svg';
import heroImage__light from '../assets/heroImage__light.png';
import heroImage__dark from '../assets/heroImage__dark.png';

export default function Home() {
  const { theme } = useThemeContext();
  const isMediumBreakpoint = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        height: isMediumBreakpoint ? null : '100vh',
        bgcolor: 'secondary.main',
        paddingY: isMediumBreakpoint ? 6 : 12,
        paddingX: isMediumBreakpoint ? null : 11,
        display: 'flex',
      }}
    >
      <Box
        sx={{
          flex: 1,
        }}
      >
        <Stack
          direction={isMediumBreakpoint ? 'column-reverse' : 'row'}
          spacing={theme.spacing(4)}
          sx={{
            height: isMediumBreakpoint ? null : '100%',
            paddingX: isMediumBreakpoint ? null : theme.spacing(4),
          }}
        >
          {/* Column 1 */}
          <Stack
            direction="column"
            spacing={6}
            sx={{ paddingX: isMediumBreakpoint ? theme.spacing(6) : null }}
          >
            <Stack direction="column" spacing={1}>
              <Typography variant="h1" sx={{ whiteSpace: 'nowrap' }}>
                Hi, I&apos;m Brady 👋
              </Typography>
              <Typography variant="body1">
                I&apos;m a full stack developer with a foundation in the
                graphics production industry that is focused on building
                software that is visually-appealing, intuitive, fast, and
                scalable. Solving business problems via programming is what gets
                me up in the morning (with the help of a strong cup of coffee)
                and keeps me up at night. I love to code!
              </Typography>
            </Stack>

            <Grid container>
              <Grid container item sx={{ marginBottom: theme.spacing(1) }}>
                <Grid
                  item
                  sx={{
                    width: '32px',
                    display: 'flex',
                    justifyContent: 'center',
                    marginLeft: '-6px',
                    marginRight: theme.spacing(1),
                  }}
                >
                  <PlaceOutlinedIcon />
                </Grid>
                <Grid item>
                  <Typography>Ontario, Canada</Typography>
                </Grid>
              </Grid>

              <Grid container item sx={{ marginBottom: theme.spacing(4) }}>
                <Grid
                  item
                  sx={{
                    marginLeft: '-6px',
                    marginRight: theme.spacing(1),
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <StatusIndicator />
                </Grid>
                <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography>Available for hire</Typography>
                </Grid>
              </Grid>

              <Grid container item spacing={1}>
                <Grid item sx={{ marginLeft: '-6px' }}>
                  <Link
                    href="https://github.com/BradySavarie"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconButton sx={{ margin: 0 }}>
                      <img
                        src={
                          theme.palette.mode === 'light'
                            ? githubIcon__light
                            : githubIcon__dark
                        }
                        alt="githubLogo"
                      />
                    </IconButton>
                  </Link>
                </Grid>
                <Grid item>
                  <IconButton sx={{ margin: 0 }}>
                    <img
                      src={
                        theme.palette.mode === 'light'
                          ? linkedInIcon__light
                          : linkedInIcon__dark
                      }
                      alt="linkedIn Logo"
                    />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Stack>
          {/* Column 2 */}
          <Container
            disableGutters
            sx={{
              display: isMediumBreakpoint ? 'flex' : null,
              justifyContent: isMediumBreakpoint ? 'center' : null,
            }}
          >
            <img
              src={
                theme.palette.mode === 'light'
                  ? heroImage__light
                  : heroImage__dark
              }
              alt="Headshot"
              height="367.19px"
            />
          </Container>
        </Stack>
      </Box>
    </Box>
  );
}
