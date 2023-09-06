import { Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { useThemeContext } from '../theme/ThemeContextProvider';

type TechnologyCardProps = {
  src: string;
  techName: string;
};

export default function TechnologyCard({ src, techName }: TechnologyCardProps) {
  const { theme } = useThemeContext();
  const isSmallBreakpoint = useMediaQuery(theme.breakpoints.down('sm'));

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
          initial={{ x: isSmallBreakpoint ? 0 : 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 50,
            delay: isSmallBreakpoint ? 0 : 0.25,
          }}
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
