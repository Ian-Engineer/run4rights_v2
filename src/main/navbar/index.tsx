import { Box, AppBar, Toolbar, IconButton, Menu, MenuItem } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface hobbyMenuItem {
    name: string;
    url: string;
}

function NavBar() {
    const [ hobbyMenuAnchor, setHobbyMenuAnchor ] = useState<null | HTMLElement>(null);
    const navigate = useNavigate();

    const hobbyMenuItems: hobbyMenuItem[] = [
        {
            name: 'Adventures',
            url: '/adventures'
        },
        {
            name: 'Woodworking',
            url: '/woodworking'
        },
        {
            name: '3D Printing',
            url: '/3d_printing'
        },
        {
            name: 'Textiles',
            url: '/textiles'
        },
        {
            name: 'Pottery',
            url: '/pottery'
        }
    ]

    const handleHobbyMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setHobbyMenuAnchor(event?.currentTarget)
    }

    const handleHobbyMenuClose = () => {
        setHobbyMenuAnchor(null);
    }

    return (
        <Box className="mt-3 mb-3">
            <AppBar position="static">
                <Toolbar>
                    <Box>
                        <IconButton
                            onClick={handleHobbyMenuClick}
                        >
                            <MenuIcon />
                        </IconButton>
                        
                        <Menu
                            open={Boolean(hobbyMenuAnchor)}
                            anchorEl={hobbyMenuAnchor}
                            onClose={handleHobbyMenuClose}
                        >
                            {
                                hobbyMenuItems.map(hobby => {
                                    return (
                                        <MenuItem onClick={()=>navigate(hobby.url)}>{hobby.name}</MenuItem>
                                    )
                                })
                            }
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar;