import { Box, Stack, Typography } from '@mui/material';
import SectionHeading from './styles/SectionHeading.styled';
import audioEffectsMockup from '../assets/audio-effects-mockup.png';
import { useThemeContext } from '../theme/ThemeContextProvider';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const { theme } = useThemeContext();

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

        <ProjectCard
          imageSrc={audioEffectsMockup}
          title="Audio Effects"
          description="Audio Effects is an e-commerce application offering a
                hand-selected catalog of guitar effects pedals. You can browse
                the catalog by category and filter the results by brand, or you
                can use the search bar to quickly find a pedal by name."
          techNames={[
            'React',
            'Typescript',
            'Material-UI',
            'Styled-Components',
            'Vite',
            'Netlify',
            'Git',
          ]}
          githubLink="/"
          liveLink="/"
        />
        <ProjectCard
          imageSrc={audioEffectsMockup}
          title="Audio Effects"
          description="Audio Effects is an e-commerce application offering a
                hand-selected catalog of guitar effects pedals. You can browse
                the catalog by category and filter the results by brand, or you
                can use the search bar to quickly find a pedal by name."
          techNames={[
            'React',
            'Typescript',
            'Material-UI',
            'Styled-Components',
            'Vite',
            'Netlify',
            'Git',
          ]}
          githubLink="/"
          liveLink="/"
        />
      </Stack>
    </Box>
  );
}
