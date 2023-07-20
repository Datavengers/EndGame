import React from 'react';
import { useState } from 'react';
import { Drawer, Box, Typography, IconButton, Divider } from '@mui/material';
import { Link } from 'react-router-dom'; // Import the Link component
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import MapIcon from '@mui/icons-material/Map';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import InfoIcon from '@mui/icons-material/Info';

export const MuiDrawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    return (
        <>
            <IconButton size='large' edge='start' color='inherit' aria-label='logo' onClick={() => setIsDrawerOpen(true)}>
                <MenuIcon />
            </IconButton>
            <Drawer
                anchor='left'
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                onClick={() => setIsDrawerOpen(false)}
            >
                <Box p={2} width='250px' textAlign='center' role='presentation'>
                    <Typography variant='h4' component='div'>
                        EndGame Menu
                    </Typography>
                    <List>
                        <ListItem>
                            <Link to="game_map" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <ListItemButton>
                                    <ListItemIcon><MapIcon /></ListItemIcon>
                                    <ListItemText>Map</ListItemText>
                                </ListItemButton>
                            </Link>
                        </ListItem>
                        {/* <Typography variant='body1' component='div'>Lessons</Typography> */}
                        
                        <Divider />
                        <ListItem>
                            <Link to="singly-linked-lists" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <ListItemButton>
                                    <ListItemIcon><ArrowForwardIcon /></ListItemIcon>
                                    <ListItemText>Singly Linked Lists</ListItemText>
                                </ListItemButton>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to="doubly-linked-lists" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <ListItemButton>
                                    <ListItemIcon><SyncAltIcon /></ListItemIcon>
                                    <ListItemText>Doubly Linked Lists</ListItemText>
                                </ListItemButton>
                            </Link>
                        </ListItem>
                        <Divider />

                        <ListItem>
                            <Link to="prizes" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <ListItemButton>
                                    <ListItemIcon><EmojiEventsIcon /></ListItemIcon>
                                    <ListItemText>Prizes</ListItemText>
                                </ListItemButton>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to="resources" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <ListItemButton>
                                    <ListItemIcon><InfoIcon /></ListItemIcon>
                                    <ListItemText>Resources</ListItemText>
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </>
    );
};
