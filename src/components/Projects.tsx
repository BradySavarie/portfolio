import { Box, Container, Stack, Typography } from '@mui/material';

import SectionHeading from './styles/SectionHeading.styled';
import audioEffectsMockup from '../assets/audio-effects-mockup.png';
import { useThemeContext } from '../theme/ThemeContextProvider';
import TechnologyTag from './styles/TechnologyTag.styled';

export default function Projects() {
  const { theme } = useThemeContext();
  return (
    <Box
      sx={{
        height: '1671px',
        paddingX: 10,
        paddingY: 12,
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
          direction="row"
          sx={{
            width: '100%',
            alignItems: 'center',
            outline: '1px solid black',
          }}
        >
          <Container
            disableGutters
            sx={{
              width: '50%',
              paddingX: 2,
              paddingY: 6,
            }}
          >
            <img
              src={audioEffectsMockup}
              alt="Audio Effects Mockup"
              width="100%"
            />
          </Container>
          <Container
            disableGutters
            sx={{
              width: '50%',
              height: 'min-content',
              padding: 6,
              bgcolor: theme.palette.grey[50],
              borderRadius: theme.shape.borderRadius,
            }}
          >
            <Stack direction="column" spacing={3}>
              <Typography variant="subtitle2">Audio Effects</Typography>
              <Typography variant="body1">
                Audio Effects is an e-commerce application offering a
                hand-selected catalog of guitar effects pedals. You can browse
                the catalog by category and filter the results by brand, or you
                can use the search bar to quickly find a pedal by name.
              </Typography>
              <TechnologyTag techName="Test" />
            </Stack>
          </Container>
        </Stack>
      </Stack>
    </Box>
  );
}
