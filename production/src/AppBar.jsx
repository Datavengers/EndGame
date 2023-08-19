import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { MuiDrawer } from './Drawer';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { LoginContext } from './LoginContext';

export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { username, isLoggedIn, handleLogin, handleLogout } = useContext(LoginContext);

  const navigate = useNavigate(); 

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleLogin = () => {
    if (isLoggedIn) {
      handleLogout();
      navigate('/');  // Redirect to the main page after logout
    } else {
      navigate('/login');  // Redirect to the login page
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="appbar">
          {isLoggedIn && <MuiDrawer />}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: 2 + 'em', fontFamily: 'Slackey' }}>
            DSAvengers
          </Typography>

          <div className="desktop">
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={isLoggedIn}
                  onChange={toggleLogin}
                  aria-label="login switch"
                />
              }
              label={isLoggedIn ? 'Logout' : 'Login'}
            />
          </FormGroup>
          </div>

          {isLoggedIn && (
            <div id="appCircle">
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <Link to="/stats" style={{ textDecoration: 'none', color: 'black' }}>
                  <MenuItem onClick={handleClose}>Stats</MenuItem>
                </Link>
                <Link to="/account" style={{ textDecoration: 'none', color: 'black' }}>
                  <MenuItem onClick={handleClose}>Account</MenuItem>
                </Link>
                <MenuItem onClick={() => {
                  handleClose();
                  handleLogout();
                  navigate('/');  // Redirect to the main page after logout
                }}>
                  Log Out
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
