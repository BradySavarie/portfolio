import { Box, Stack, Typography, Container } from '@mui/material';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import { useThemeContext } from '../theme/ThemeContextProvider';

export default function Home() {
  const { theme } = useThemeContext();
  console.log(theme.typography.body1);

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
          sx={{
            height: '100%',
            paddingX: theme.spacing(4),
          }}
        >
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
            <Stack direction="column" spacing={1}>
              <Stack direction="row" spacing={1}>
                <PlaceOutlinedIcon />
                <Typography>Ontario, Canada</Typography>
              </Stack>
              <Stack direction="row" spacing={1}>
                <PlaceOutlinedIcon />
                <Typography>Available for hire</Typography>
              </Stack>
            </Stack>
          </Stack>
          <Container sx={{ outline: '1px solid black' }}>
            <Typography>Hey</Typography>
          </Container>
        </Stack>
      </Box>
    </Box>
  );
}
