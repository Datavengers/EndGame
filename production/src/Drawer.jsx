import React from 'react';
import { useState, useEffect } from 'react';
import { Drawer, Box, Typography, IconButton, Divider } from '@mui/material';
import { Link } from 'react-router-dom'; // Import the Link component
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import MapIcon from '@mui/icons-material/Map';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import InfoIcon from '@mui/icons-material/Info';
import LayersIcon from '@mui/icons-material/Layers';
import ParkIcon from '@mui/icons-material/Park';
import AbcIcon from '@mui/icons-material/Abc';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SchoolIcon from '@mui/icons-material/School';

export const MuiDrawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [user, setUser] = useState({});

    const fetchUserData = async () => {
      try {
        const response = await fetch("/data-vengers/api/user", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        });
  
        if (response.status === 200) {
          const data = await response.json();
          setUser(data);
        } else {
          console.error('Error fetching user data');
        }
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };
  
    useEffect(() => {
      fetchUserData()
    }, []);
    return (
        <>
            <IconButton size='large' edge='start' color='inherit' aria-label='logo' onClick={() => setIsDrawerOpen(true)}>
                <MenuIcon />
            </IconButton>
            <Drawer
                PaperProps={{
                    sx: {
                      backgroundColor: "#5ebcfa",
                      color: "white",
                    }
                  }}
                anchor='left'
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                onClick={() => setIsDrawerOpen(false)}
            >
                <Box p={2} width='35vh' textAlign='center' role='presentation'>
            {/* <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader> */}
                    <Typography variant='h4' component='div' sx={{fontFamily:'Slackey'}}>
                        Menu
                    </Typography>
                    <List>
                        <ListItem>
                            <Link to="/game_map" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <ListItemButton>
                                    <ListItemIcon style={{color:'#ffff4d'}}><MapIcon /></ListItemIcon>
                                    <ListItemText primaryTypographyProps={{fontSize:3.2+'vh',fontFamily:'Architects Daughter'}}>Map</ListItemText>
                                </ListItemButton>
                            </Link>
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <Link to="/singly-linked-lists" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <ListItemButton>
                                    <ListItemIcon style={{color:'#ffff4d'}}><ArrowForwardIcon /></ListItemIcon>
                                    <ListItemText primaryTypographyProps={{fontSize:2.6+'vh',fontFamily:'Architects Daughter'}}>S. Linked Lists</ListItemText>
                                </ListItemButton>
                            </Link>
                        </ListItem>
                        <Divider/>
                        {user.DLLUnlocked ? (
                        <ListItem>
                            <Link to="/doubly-linked-lists" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <ListItemButton>
                                    <ListItemIcon style={{color:'#ffff4d'}}><SyncAltIcon /></ListItemIcon>
                                    <ListItemText primaryTypographyProps={{fontSize:2.6+'vh',fontFamily:'Architects Daughter'}}>D. Linked Lists</ListItemText>
                                </ListItemButton>
                            </Link>
                        </ListItem>) : 
                        <ListItem style={{marginLeft:10+'px'}}>
                            <ListItemIcon><SyncAltIcon/></ListItemIcon>
                            <ListItemText primaryTypographyProps={{fontSize:3+'vh',fontFamily:'Architects Daughter', color:"gray"}}>???</ListItemText>
                        </ListItem>}
                        <Divider />
                        {user.sqUnlocked ? (
                        <ListItem>
                            <Link to="/stacks-n-queues" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <ListItemButton>
                                    <ListItemIcon style={{color:'#ffff4d'}}><LayersIcon /></ListItemIcon>
                                    <ListItemText primaryTypographyProps={{fontSize:2.6+'vh',fontFamily:'Architects Daughter'}}>Stacks & Queues</ListItemText>
                                </ListItemButton>
                            </Link>
                        </ListItem>) : 
                        <ListItem style={{marginLeft:10+'px'}}>
                            <ListItemIcon><LayersIcon/></ListItemIcon>
                            <ListItemText primaryTypographyProps={{fontSize:3+'vh',fontFamily:'Architects Daughter', color:"gray"}}>???</ListItemText>
                        </ListItem>}
                        <Divider />
                        {user.treesUnlocked ? (
                        <ListItem>
                            <Link to="/trees" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <ListItemButton>
                                    <ListItemIcon style={{color:'#ffff4d'}}><ParkIcon /></ListItemIcon>
                                    <ListItemText primaryTypographyProps={{fontSize:3+'vh',fontFamily:'Architects Daughter'}}>Trees</ListItemText>
                                </ListItemButton>
                            </Link>
                        </ListItem>) : 
                        <ListItem style={{marginLeft:10+'px'}}>
                            <ListItemIcon><ParkIcon/></ListItemIcon>
                            <ListItemText primaryTypographyProps={{fontSize:3+'vh',fontFamily:'Architects Daughter', color:"gray"}}>???</ListItemText>
                        </ListItem>}
                        <Divider />
                        {user.triesUnlocked ? (
                        <ListItem>
                            <Link to="/tries" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <ListItemButton>
                                    <ListItemIcon style={{color:'yellow'}}><AbcIcon/></ListItemIcon>
                                    <ListItemText primaryTypographyProps={{fontSize:3+'vh',fontFamily:'Architects Daughter'}}>Tries</ListItemText>
                                </ListItemButton>
                            </Link>
                        </ListItem>) : 
                        <ListItem style={{marginLeft:10+'px'}}>
                            <ListItemIcon><AbcIcon/></ListItemIcon>
                            <ListItemText primaryTypographyProps={{fontSize:3+'vh',fontFamily:'Architects Daughter', color:"gray"}}>???</ListItemText>
                        </ListItem>}
                        <Divider />

                        <ListItem>
                            <Link to="/prizes" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <ListItemButton>
                                    <ListItemIcon style={{color:'yellow'}}><EmojiEventsIcon /></ListItemIcon>
                                    <ListItemText primaryTypographyProps={{fontSize:2.5+'vh',fontFamily:'Architects Daughter'}}>Prizes</ListItemText>
                                </ListItemButton>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/resources" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <ListItemButton>
                                    <ListItemIcon style={{color:'yellow'}}><SchoolIcon /></ListItemIcon>
                                    <ListItemText primaryTypographyProps={{fontSize:2.5+'vh',fontFamily:'Architects Daughter'}}>School</ListItemText>
                                </ListItemButton>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/library" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <ListItemButton>
                                    <ListItemIcon style={{color:'yellow'}}><MenuBookIcon /></ListItemIcon>
                                    <ListItemText primaryTypographyProps={{fontSize:2.5+'vh',fontFamily:'Architects Daughter'}}>Library</ListItemText>
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    </List>
                    <List id="bottomLink">
                        <ListItem>
                            <Link to="/about-us" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <ListItemButton>
                                    <ListItemIcon style={{color:'#ffff4d'}}><InfoIcon/></ListItemIcon>
                                    <ListItemText primaryTypographyProps={{fontSize:2.5+'vh',fontFamily:'Architects Daughter'}}>About Us</ListItemText>
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </>
    );
};
