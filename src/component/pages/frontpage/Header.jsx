import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from '@mui/material';
const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const navigate = useNavigate();
  const handleLogIn = () => {
    navigate('/login');
}
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Drawer
      anchor="left"
      open={drawerOpen}
      onClose={handleDrawerToggle}
    >
      <List>
        <ListItem button>
          {/* <ListItemText primary="Home" /> */}
          <Button variant='contained' >login</Button>
        </ListItem>
        <ListItem button>
        <Button variant='contained'>sign up</Button>
        </ListItem>
        
      </List>
    </Drawer>
  );
  return (
    <>
     <AppBar position="static">
        <Toolbar>
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            MyApp
          </Typography>
          {!isMobile && (
            <div>
              <Button variant='contained' onClick={handleLogIn}>Login</Button>
              <Button variant='contained' sx={{marginLeft:'10px'}}>Sign up</Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
      {isMobile && drawer}
    </>
  )
}

export default Header