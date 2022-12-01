import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

type NavbarProps = {
  darkToggle: boolean;
  onToggle: () => void;
};

export const CustomNavbar = ({ darkToggle, onToggle }: NavbarProps) => {
  console.log(darkToggle);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='static'
        color={`${darkToggle ? 'transparent' : 'primary'}`}
      >
        <Toolbar>
          <IconButton
            size='small'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <CatchingPokemonIcon color='error' />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Pokemon
          </Typography>
          <Button color='inherit' onClick={() => onToggle()}>
            {darkToggle ? <DarkModeIcon /> : <LightModeIcon />}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
