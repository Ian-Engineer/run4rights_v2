import { Box, AppBar, Toolbar, IconButton, Menu, MenuItem, useMediaQuery, useTheme, PopoverOrigin, Typography } from "@mui/material";
import { DarkMode, Email, Menu as MenuIcon } from "@mui/icons-material";
import LightModeIcon from '@mui/icons-material/LightMode';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { navbar } from "../../config/models";
import { useThemeMode } from "../../config/theme";

function NavBar({menuItems}: {menuItems: navbar.navbarMenuItem[]}) {
    const [ hobbyMenuAnchor, setHobbyMenuAnchor ] = useState<null | HTMLElement>(null);
    const { mode, toggleColorMode } = useThemeMode();
    const anchorRef = React.useRef<HTMLButtonElement>(null);
    const navigate = useNavigate();


    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const menuAnchorOrigin: PopoverOrigin = isSmallScreen
    ? { vertical: 'top', horizontal: 'left' }
    : { vertical: 'bottom', horizontal: 'left' };

    const menuTransformOrigin: PopoverOrigin = isSmallScreen
    ? { vertical: 'bottom', horizontal: 'left' }
    : { vertical: 'top', horizontal: 'left' };

    const handleHobbyMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setHobbyMenuAnchor(event?.currentTarget)
    }

    const handleHobbyMenuClose = () => {
        setHobbyMenuAnchor(null);
    }

    return (
        <Box className="mt-3 mb-3">
            <AppBar position="static">
                <Toolbar className='w-full'>
                    <Box className='flex flex-row justify-between w-full'>
                        <div id="left side of menu" className="flex flex-row items-center align-center gap-4">
                            <IconButton
                                onClick={handleHobbyMenuClick}
                                >
                                <MenuIcon />
                            </IconButton>
                        </div>
                        <div id='right side of menu'>
                        <IconButton onClick={toggleColorMode}>
                            {mode === 'light' ?
                                <LightModeIcon />
                            :
                                <DarkMode />
                            }
                        </IconButton>
                        <IconButton onClick={()=>navigate('/contact')}>
                            <Email />
                        </IconButton>
                        </div>

                        <Menu
                            anchorEl={hobbyMenuAnchor}
                            open={Boolean(hobbyMenuAnchor)}
                            onClose={handleHobbyMenuClose}
                            anchorOrigin={menuAnchorOrigin}
                            transformOrigin={menuTransformOrigin}
                        >
                            {menuItems.map((item) => (
                                <MenuItem
                                    key={item.name}
                                    onClick={() => navigate(item.url)}
                                >
                                    {item.name}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar;