import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Stack } from '@mui/material';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {'<BRADY__SAVARIE />'}
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color="inherit">Projects</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Skills</Button>
            <Button color="inherit">Contact</Button>
          </Stack>
          <IconButton size="large" edge="start">
            <LightModeIcon />
            <DarkModeIcon />
          </IconButton>
          <Button color="inherit">Download Resume</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
