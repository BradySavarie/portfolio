import { Box, Stack, Typography } from '@mui/material';
import SectionHeading from './styles/SectionHeading.styled';
import { useThemeContext } from '../theme/ThemeContextProvider';

export default function Technologies() {
  const { theme } = useThemeContext();
  return (
    <Box
      sx={{
        height: '512px',
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
          outline: '1px solid black',
          flex: 1,
          paddingX: theme.spacing(4),
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
          <Box sx={{ outline: '1px solid black', flex: 1 }} />
        </Stack>
      </Box>
    </Box>
  );
}
