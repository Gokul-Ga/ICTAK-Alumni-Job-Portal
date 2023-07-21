import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{fontWeight:'bolder'}} sx={{ flexGrow: 1 }}>
          ICTAK Alumni Job Portal
        </Typography>

        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>


          <Button sx={{ marginRight:'10px',color: 'white',textDecoration: 'none', 
        '&:hover': {backgroundColor:'darkblue',}}}  >
             <Link to={"/homepage"} style={{ color :'white',textDecoration:'none'}}>Home</Link></Button>
             <Button sx={{ marginRight:'10px',color: 'white',textDecoration: 'none', 
        '&:hover': {backgroundColor:'darkblue',}}}  >
             <Link to={"/dashboard"} style={{ color :'white',textDecoration:'none'}}>Dashboard</Link></Button>

          <Button sx={{marginRight:'10px', color: 'white',textDecoration: 'none',
        '&:hover': {backgroundColor:'darkblue'}}}  >
             <Link to={"/login"} style={{ color :'white',textDecoration:'none'}}>View Jobs</Link></Button>


          <Button sx={{marginRight:'10px', color: 'white',textDecoration: 'none', 
        '&:hover': {backgroundColor:'darkblue',}}}  >
             <Link to={"/login"} style={{ color :'white',textDecoration:'none'}}>Login</Link>
        </Button>


        <Button sx={{marginRight:'10px', color: 'white',textDecoration: 'none', 
        '&:hover': {backgroundColor:'darkblue',}}}  >
             <Link to={"/signup"} style={{ color :'white',textDecoration:'none'}}>Signup</Link>
        </Button>

          <Button sx={{ marginLeft:'10px',color: 'white',textDecoration: 'none',backgroundColor: '#4CAF50', 
        '&:hover': {backgroundColor: '#45a049',}}}  >
             <Link to={"/login"} style={{ color :'white',textDecoration:'none'}}>About Us</Link></Button>
        </Box>

        {/* Hamburger Menu (for small screens) */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Home</MenuItem>
            <MenuItem onClick={handleMenuClose}>View Jobs</MenuItem>
            <MenuItem onClick={handleMenuClose}>Login</MenuItem>
            <MenuItem onClick={handleMenuClose}>Signup</MenuItem>
            <MenuItem onClick={handleMenuClose}>About Us</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
