import { Box, Stack, Typography, Container } from '@mui/material';
import { useThemeContext } from '../theme/ThemeContextProvider';

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
          outline: '1px solid black',
          flex: 1,
        }}
      >
        <Stack
          direction="row"
          spacing={theme.spacing(4)}
          sx={{ height: '100%', paddingX: theme.spacing(4) }}
        >
          <Container
            sx={{
              outline: '1px solid black',
            }}
          >
            <Typography>Hey</Typography>
          </Container>
          <Container sx={{ outline: '1px solid black' }}>
            <Typography>Hey</Typography>
          </Container>
        </Stack>
      </Box>
    </Box>
  );
}
