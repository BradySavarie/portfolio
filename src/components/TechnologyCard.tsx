import { Grid, Stack, Typography } from '@mui/material';

type TechnologyCardProps = {
  src: string;
  techName: string;
};

export default function TechnologyCard({ src, techName }: TechnologyCardProps) {
  return (
    <Grid item>
      <Stack
        direction="column"
        spacing={0.5}
        sx={{
          textAlign: 'center',
          width: '90px',
          height: '100px',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <img src={src} alt="Technology Icon" width="70%" />
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          {techName}
        </Typography>
      </Stack>
    </Grid>
  );
}
