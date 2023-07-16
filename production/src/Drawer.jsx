import { useState } from 'react';
import { Drawer, Box, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import MapIcon from '@mui/icons-material/Map';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import InfoIcon from '@mui/icons-material/Info';

export const MuiDrawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    return (
        <>
            <IconButton size='large' edge='start' color='inherit' aria-label='logo' onClick={() => setIsDrawerOpen(true)}>
                <MenuIcon />
            </IconButton>
            <Drawer
                anchor='left'
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
            >
                <Box p={2} width='250px' textAlign='center' role='presentation'>
                    <Typography variant='h6' component='div'>
                        EndGame Menu
                    </Typography>
                    <List>
                        {['Map', 'Lessons', 'Prizes', 'Resources', 'Profile'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <MapIcon /> : <InfoIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    )
}