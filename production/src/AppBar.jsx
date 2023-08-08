import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { MuiDrawer } from './Drawer';
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react';
import {LoginContext} from './LoginContext';

/* Change the color of the appbar using the .appbar section of index.css*/

export default function MenuAppBar() {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const { username, isLoggedIn } = useContext(LoginContext);
  /* This ^ might not be important if we use auth?*/

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{marginBottom:'none'}}>
        <Toolbar className="appbar">
          {auth &&
            <MuiDrawer />
          }
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize:2+'em', fontFamily:'Slackey' }}>
            DSA EndGame
          </Typography>
          
          {/* This is useful for texting login-based capabilities */}
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={auth}
                  onChange={handleChange}
                  aria-label="login switch"
                />
              }
              label={auth ? 'Logout' : 'Login'}
            />
          </FormGroup>
        {/*end useful testing thing*/}

          {auth && (
            <div>
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
                <Link to="/stats" style={{textDecoration:'none', color:'black'}}>
                  <MenuItem onClick={handleClose}>Stats</MenuItem>
                </Link>
                <Link to="/account" style={{textDecoration:'none', color:'black'}}>
                  <MenuItem onClick={handleClose}>Account</MenuItem>
                </Link>
                <MenuItem onClick={() => {
                  handleClose();
                  setAuth(false);
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