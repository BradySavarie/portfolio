import {
  Box,
  Grid,
  Stack,
  Typography,
  Container,
  IconButton,
} from '@mui/material';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import { useThemeContext } from '../theme/ThemeContextProvider';
import StatusIndicator from './StatusIndicator';
import linkedInLogo from '../assets/linkedInIcon.svg';
import githubLogo from '../assets/githubIcon.svg';
import heroImage__light from '../assets/heroImage__light.png';
import heroImage__dark from '../assets/heroImage__dark.png';

export default function Home() {
  const { theme } = useThemeContext();

  return (
    <Box
      sx={{
        height: '560px',
        bgcolor: theme.palette.secondary.main,
        paddingY: theme.spacing(12),
        paddingX: theme.spacing(11),
        display: 'flex',
      }}
    >
      <Box
        sx={{
          flex: 1,
        }}
      >
        <Stack
          direction="row"
          spacing={theme.spacing(4)}
          sx={{
            height: '100%',
            paddingX: theme.spacing(4),
          }}
        >
          {/* Column 1 */}
          <Stack direction="column" spacing={6}>
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
                  <IconButton sx={{ margin: 0 }}>
                    <img src={githubLogo} alt="githubLogo" />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton sx={{ margin: 0 }}>
                    <img src={linkedInLogo} alt="LinkedInLogo" />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Stack>
          {/* Column 2 */}
          <Container disableGutters>
            {theme.palette.mode === 'light' ? (
              <img src={heroImage__light} alt="Headshot" height="367.19px" />
            ) : (
              <img src={heroImage__dark} alt="Headshot" height="367.19px" />
            )}
          </Container>
        </Stack>
      </Box>
    </Box>
  );
}
