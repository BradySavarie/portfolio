import { Box, Stack, Typography, useMediaQuery } from '@mui/material';
import { useThemeContext } from '../theme/ThemeContextProvider';
import SectionHeading from './styles/SectionHeading.styled';
import ProjectCard from './ProjectCard';
import audioEffectsMockup from '../assets/audio-effects-mockup.png';
import cvBuilderMockup from '../assets/cv-builder-mockup.png';
import portfolioMockup from '../assets/portfolio-mockup.png';

export default function Projects() {
  const { theme } = useThemeContext();
  const isSmallBreakpoint = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <section id="projects">
      <Box
        sx={{
          paddingX: isSmallBreakpoint ? theme.spacing(4) : 10,
          paddingTop: 10,
          paddingBottom: 8,
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
            <Typography variant="subtitle1" sx={{ textAlign: 'center' }}>
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
            githubLink="https://github.com/BradySavarie/ecommerce-shop"
            liveLink="https://beamish-bienenstitch-2cbea9.netlify.app/"
          />
          <ProjectCard
            imageSrc={cvBuilderMockup}
            title="CV Builder"
            description="An ATS-compatible CV builder app that exports professional resumes in PDF format. The resume attached to this website was created using CV Builder!"
            techNames={[
              'React',
              'Javascript',
              'Create-React-App',
              'Styled-Components',
              'Github Pages',
              'Git',
            ]}
            githubLink="https://github.com/BradySavarie/cv-builder"
            liveLink="https://bradysavarie.github.io/cv-builder/"
          />
          <ProjectCard
            imageSrc={portfolioMockup}
            title="My Portfolio"
            description="You're looking at it! This website was developed to display my work and help connect with employers, clients, and other developers. It is fully-responsive and features a dark mode option that can be toggled from within the navbar."
            techNames={[
              'React',
              'Typescript',
              'Material-UI',
              'Styled-Components',
              'Framer Motion',
              'Vite',
              'Netlify',
              'Git',
            ]}
            githubLink="https://github.com/BradySavarie/portfolio"
            liveLink="/"
          />
        </Stack>
      </Box>
    </section>
  );
}
