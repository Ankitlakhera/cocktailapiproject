import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

import LocalBarRoundedIcon from '@mui/icons-material/LocalBarRounded';
import LiquorRoundedIcon from '@mui/icons-material/LiquorRounded';
import NoDrinksRoundedIcon from '@mui/icons-material/NoDrinksRounded';
import NightlifeRoundedIcon from '@mui/icons-material/NightlifeRounded';
import WineBarRoundedIcon from '@mui/icons-material/WineBarRounded';

function Sidebar() {
    return (
        <Box  sx={{margin:"3rem"}} >
            <Box >sidebar
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <NightlifeRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary="NightlifeRoundedIcon" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <LocalBarRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary="LocalBarRoundedIcon" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                < WineBarRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary=" WineBarRoundedIcon " />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <LiquorRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary="LiquorRoundedIcon" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <NoDrinksRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary="NoDrinksRoundedIcon" />
                        </ListItemButton>
                    </ListItem>
                </List>

            </Box>
        </Box>
    )
}

export default Sidebar