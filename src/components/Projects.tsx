import {
  Box,
  Container,
  Stack,
  Typography,
  Grid,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import SectionHeading from './styles/SectionHeading.styled';
import audioEffectsMockup from '../assets/audio-effects-mockup.png';
import { useThemeContext } from '../theme/ThemeContextProvider';
import TechnologyTagList from './styles/TechnologyTagList.styled';
import liveLinkIcon from '../assets/liveLinkIcon.png';
import githubIcon__primary from '../assets/githubIcon__primary.png';

export default function Projects() {
  const { theme } = useThemeContext();
  const isMediumBreakpoint = useMediaQuery(theme.breakpoints.down('md'));
  const isLargeBreakpoint = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Box
      sx={{
        height: '1671px',
        paddingX: 10,
        paddingY: 12,
        bgcolor:
          theme.palette.mode === 'light'
            ? theme.palette.common.white
            : 'rgba(255,255,255,.025)',
      }}
    >
      <Stack
        direction="column"
        spacing={10}
        sx={{
          height: '100%',
          paddingY: 2,
        }}
      >
        <Stack direction="column" spacing={2} sx={{ alignItems: 'center' }}>
          <SectionHeading>
            <Typography variant="body2">Projects</Typography>
          </SectionHeading>
          <Typography variant="subtitle1">
            Some of the recent applications i&apos;ve built:
          </Typography>
        </Stack>

        <Stack
          direction={isLargeBreakpoint ? 'column' : 'row'}
          sx={{
            width: '100%',
            alignItems: 'center',
          }}
        >
          <Container
            disableGutters
            sx={{
              paddingX: 2,
              paddingY: 6,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <img
              src={audioEffectsMockup}
              alt="Audio Effects Mockup"
              width={isMediumBreakpoint ? '100%' : '500px'}
            />
          </Container>

          <Container
            disableGutters
            sx={{
              maxWidth: isLargeBreakpoint ? '100%' : '50%',
              height: 'min-content',
              paddingX: 6,
              paddingY: 4,
              bgcolor:
                theme.palette.mode === 'light'
                  ? theme.palette.primary.light
                  : 'rgba(255, 255, 255, .05)',
              borderRadius: theme.shape.borderRadius,
              boxShadow: theme.shadows[3],
            }}
          >
            <Stack direction="column" spacing={2}>
              <Typography
                variant="subtitle2"
                sx={{ color: theme.palette.text.primary }}
              >
                Audio Effects
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: theme.palette.text.secondary }}
              >
                Audio Effects is an e-commerce application offering a
                hand-selected catalog of guitar effects pedals. You can browse
                the catalog by category and filter the results by brand, or you
                can use the search bar to quickly find a pedal by name.
              </Typography>
              <Grid container>
                <TechnologyTagList
                  techNames={[
                    'React',
                    'Typescript',
                    'Material-UI',
                    'Styled-Components',
                    'Vite',
                    'Netlify',
                    'Git',
                  ]}
                />
              </Grid>

              <Grid container item>
                <Grid item sx={{ marginLeft: '-6px' }}>
                  <IconButton sx={{ margin: 0 }}>
                    <img src={liveLinkIcon} alt="Live Link" height="40px" />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton sx={{ margin: 0 }}>
                    <img
                      src={githubIcon__primary}
                      alt="Github Project Link"
                      height="40px"
                    />
                  </IconButton>
                </Grid>
              </Grid>
            </Stack>
          </Container>
        </Stack>
      </Stack>
    </Box>
  );
}
