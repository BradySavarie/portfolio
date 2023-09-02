import { Box, Stack, Typography, Grid, useMediaQuery } from '@mui/material';
import SectionHeading from './styles/SectionHeading.styled';
import { useThemeContext } from '../theme/ThemeContextProvider';
import TechnologyCard from './TechnologyCard';
import html5Icon from '../assets/html5Icon.png';
import css3Icon from '../assets/css3Icon.png';
import javascriptIcon from '../assets/javascriptIcon.png';
import typescriptIcon from '../assets/typescriptIcon.png';
import reactIcon from '../assets/reactIcon.png';
import nodejsIcon from '../assets/nodejsIcon.png';
import viteIcon from '../assets/viteIcon.png';
import sassIcon from '../assets/sassIcon.png';
import muiIcon from '../assets/muiIcon.png';
import styledComponentsIcon from '../assets/styledComponentsIcon.png';
import tailwindIcon from '../assets/tailwindIcon.png';
import figmaIcon from '../assets/figmaIcon.png';
import jestIcon from '../assets/jestIcon.png';
import gitIcon from '../assets/gitIcon.png';

export default function Technologies() {
  const { theme } = useThemeContext();
  const isSmallBreakpoint = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumBreakpoint = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        width: '100vw',
        bgcolor: 'secondary.main',
        paddingX: theme.spacing(10),
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(12),
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          flex: 1,
          paddingX: isMediumBreakpoint ? null : theme.spacing(4),
        }}
      >
        <Stack direction="column" spacing={8} sx={{ height: '100%' }}>
          <Stack direction="column" spacing={2} sx={{ alignItems: 'center' }}>
            <SectionHeading>
              <Typography variant="body2">Technologies</Typography>
            </SectionHeading>
            <Typography
              variant="subtitle1"
              sx={{ textAlign: 'center', color: 'text.secondary' }}
            >
              Some of the skills, tools, and technologies I use often:
            </Typography>
          </Stack>
          <Box sx={{ flex: 1 }}>
            <Grid
              container
              direction="row"
              rowSpacing={isSmallBreakpoint ? 8 : 6}
              columnSpacing={isSmallBreakpoint ? 4 : 8}
              justifyContent="center"
            >
              <TechnologyCard src={html5Icon} techName="HTML5" />
              <TechnologyCard src={css3Icon} techName="CSS3" />
              <TechnologyCard src={javascriptIcon} techName="Javascript" />
              <TechnologyCard src={typescriptIcon} techName="Typescript" />
              <TechnologyCard src={reactIcon} techName="React" />
              <TechnologyCard src={nodejsIcon} techName="Nodejs" />
              <TechnologyCard src={viteIcon} techName="Vite" />
              <TechnologyCard src={sassIcon} techName="SASS" />
              <TechnologyCard src={muiIcon} techName="Material-UI" />
              <TechnologyCard
                src={styledComponentsIcon}
                techName="Styled-Components"
              />
              <TechnologyCard src={tailwindIcon} techName="Tailwind" />
              <TechnologyCard src={figmaIcon} techName="Figma" />
              <TechnologyCard src={jestIcon} techName="Jest" />
              <TechnologyCard src={gitIcon} techName="Git" />
            </Grid>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
