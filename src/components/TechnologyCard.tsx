import { Grid, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';

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
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 50, delay: 0.25 }}
        >
          <img src={src} alt="Technology Icon" width="70%" />
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            {techName}
          </Typography>
        </motion.div>
      </Stack>
    </Grid>
  );
}
