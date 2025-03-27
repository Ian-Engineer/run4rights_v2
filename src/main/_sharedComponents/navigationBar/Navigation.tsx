import { useState, useEffect } from "react";
import { AppBar, Box, Toolbar, IconButton, Button, Typography, Menu, MenuItem } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
// import theme from "../../config/style/theme";

const NavigationBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorRtNav, setAnchorRtNav] = useState(null);
  const [rightMenuList, setRightMenuList] = useState([]);
  const [leftMenuList, setLeftMenuList] = useState([]);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseRtMenu = () => {
    setAnchorRtNav(null);
  }

  useEffect(()=>{
    // load any information necessary for the nav bar here
  },[])

  return null;

  return (
    <AppBar position="static">
      <Toolbar
        disableGutters
        style={{ background: theme.palette.primary.mainGradient }}
        className="w-full m-0"
      >
        <Box
          className="ml-2 mr-2 flex flex-row justify-between w-full"
          color="primary"
        >
          <Button
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="primary"
            variant="contained"
          >
            <Typography
              className="flex items-center w-20 justify-center"
              sx={{ fontWeight: "bold" }}
            >
              Menu
            </Typography>
          </Button>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            color="primary.contrastText"
            sx={
              { mt: "1px", "& .MuiMenu-paper": 
                { backgroundColor: "black", }, 
              }
            }
          >
            {leftMenuList.map((page) => {
              return (
                <MenuItem key={page.name} onClick={page.onClick}>
                  <Typography
                    textAlign="center"
                    color={'primary.contrastText'}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              );
            })}
          </Menu>
          <img src="/images/1.png" className="h-10" onClick={()=>{handleNavigate('/')}} alt=''/>
          <Button
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenRtMenu}
            color="primary"
            variant="contained"
          >
            <Typography
              className="flex items-center w-20 justify-center"
              sx={{ fontWeight: "bold" }}
            >
              Account
            </Typography>
          </Button>
          <Menu
          id="menu-appbar"
          anchorEl={anchorRtNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorRtNav)}
          onClose={handleCloseRtMenu}
          sx={
            { mt: "1px", "& .MuiMenu-paper": 
              { backgroundColor: "black", }, 
            }
          }
        >
          {rightMenuList.map((page) => {
            return (
              <MenuItem key={page.name}>
                <Typography
                  textAlign="center"
                  onClick={() => page.onClick()}
                  color='primary.contrastText'
                >
                  {page.name}
                </Typography>
              </MenuItem>
            );
          })}
        </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default NavigationBar;
