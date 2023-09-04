import { Box, Typography, Stack } from '@mui/material';
import { useThemeContext } from '../theme/ThemeContextProvider';
import copyrightIcon__light from '../assets/copyrightIcon__light.svg';
import copyrightIcon__dark from '../assets/copyrightIcon__dark.svg';

export default function Footer() {
  const { theme } = useThemeContext();
  return (
    <Box
      sx={{
        width: '100vw',
        paddingY: 3,
        paddingX: 10,
        bgcolor:
          theme.palette.mode === 'light'
            ? theme.palette.common.white
            : 'rgba(255,255,255,.025)',
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <img
          src={
            theme.palette.mode === 'light'
              ? copyrightIcon__light
              : copyrightIcon__dark
          }
          alt="Copyright Icon"
        />
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ whiteSpace: 'nowrap' }}
        >
          2023 | Coded with ❤️️ by Brady Savarie
        </Typography>
      </Stack>
    </Box>
  );
}
