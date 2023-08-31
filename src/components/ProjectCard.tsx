import {
  Container,
  Stack,
  Typography,
  Grid,
  Link,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import TechnologyTagList from './styles/TechnologyTagList.styled';
import { useThemeContext } from '../theme/ThemeContextProvider';
import liveLinkIcon from '../assets/liveLinkIcon.png';
import githubLinkIcon from '../assets/githubIcon__primary.png';

type ProjectCardProps = {
  imageSrc: string;
  title: string;
  description: string;
  techNames: string[];
  githubLink: string;
  liveLink: string;
};

export default function ProjectCard({
  imageSrc,
  title,
  description,
  techNames,
  githubLink,
  liveLink,
}: ProjectCardProps) {
  const { theme } = useThemeContext();
  const isMediumBreakpoint = useMediaQuery(theme.breakpoints.down('md'));
  const isLargeBreakpoint = useMediaQuery(theme.breakpoints.down('lg'));
  return (
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
          src={imageSrc}
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
            {title}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: theme.palette.text.secondary }}
          >
            {description}
          </Typography>
          <Grid container>
            <TechnologyTagList techNames={techNames} />
          </Grid>

          <Grid container item>
            <Grid item sx={{ marginLeft: '-6px' }}>
              <Link href={liveLink} target="_blank" rel="noopener noreferrer">
                <IconButton sx={{ margin: 0 }}>
                  <img src={liveLinkIcon} alt="Live Link" height="40px" />
                </IconButton>
              </Link>
            </Grid>
            <Grid item>
              <Link href={githubLink} target="_blank" rel="noopener noreferrer">
                <IconButton sx={{ margin: 0 }}>
                  <img
                    src={githubLinkIcon}
                    alt="Github Project Link"
                    height="40px"
                  />
                </IconButton>
              </Link>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Stack>
  );
}
