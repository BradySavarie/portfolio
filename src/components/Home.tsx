import { Box } from '@mui/material';
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
      }}
    >
      <Box sx={{ outline: '1px solid black', height: '100%' }} />
    </Box>
  );
}
