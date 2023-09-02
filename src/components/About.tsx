import {
  Typography,
  Box,
  Stack,
  Container,
  useMediaQuery,
} from '@mui/material';
import SectionHeading from './styles/SectionHeading.styled';
import { useThemeContext } from '../theme/ThemeContextProvider';
import aboutPhoto__light from '../assets/aboutPhoto__light.png';
import aboutPhoto__dark from '../assets/aboutPhoto__dark.png';

export default function About() {
  const { theme } = useThemeContext();
  const isMediumBreakpoint = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box
      sx={{
        height: '768px',
        width: '100vw',
        paddingY: 12,
        paddingX: 10,
        display: 'flex',
        flexDirection: 'column',
        bgcolor:
          theme.palette.mode === 'light'
            ? theme.palette.common.white
            : 'rgba(255,255,255,.025)',
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Stack direction="column" spacing={6} sx={{ alignItems: 'center' }}>
          <SectionHeading>
            <Typography variant="body2">About</Typography>
          </SectionHeading>
          <Stack direction={isMediumBreakpoint ? 'column' : 'row'} spacing={6}>
            <Container
              disableGutters
              sx={{
                display: 'flex',
                justifyContent: isMediumBreakpoint ? 'center' : 'left',
                marginBottom: isMediumBreakpoint ? 'null' : theme.spacing(6),
                marginRight: isMediumBreakpoint ? 'null' : theme.spacing(14),
              }}
            >
              <img
                src={
                  theme.palette.mode === 'light'
                    ? aboutPhoto__light
                    : aboutPhoto__dark
                }
                alt="Personal Photograph"
                height="400px"
              />
            </Container>
            <Stack direction="column" spacing={1}>
              <Typography variant="h2" sx={{ whiteSpace: 'nowrap' }}>
                Getting Personal: Who Am I?
              </Typography>
              <Typography variant="body1">
                I am a self-proclaimed developer who specializes in building
                full-stack software applications (preferably using Typescript,
                React, and Node.js). I&apos;m enthusiastic about creating a
                top-notch UX while maintaining a visually appealing design, and
                producing code that strikes a balance between clarity and
                efficiency is something I genuinely care about.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
