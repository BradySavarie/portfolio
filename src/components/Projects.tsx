import { Box, Stack, Typography } from '@mui/material';
import SectionHeading from './styles/SectionHeading.styled';

export default function Projects() {
  return (
    <Box
      sx={{
        bgcolor: 'secondary.main',
        height: '1671px',
        outline: '1px solid black',
        paddingX: 10,
        paddingY: 12,
      }}
    >
      <Stack
        direction="column"
        sx={{
          outline: '1px solid black',
          height: '100%',
        }}
      >
        <Stack direction="column">
          <SectionHeading>
            <Typography variant="body2">Projects</Typography>
          </SectionHeading>
          <Typography variant="subtitle1">
            Some of the recent applications i&apos;ve built:
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
