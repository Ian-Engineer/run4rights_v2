import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Grow, Box } from "@mui/material";
import NavBar from "main/navbar";
import { navbar } from "models";

const menuItems: navbar.navbarMenuItem[] = [
    {
        name: 'Home',
        url: '/'
    },
    {
        name: 'Events',
        url: '/events'
    }
]

function Root() {
    // implement a Drawer for the left side navigation
    // implement app bar for the top of screen menu bar
    const [displayContent, setDisplayContent] = useState<boolean>(true);

    useEffect(()=>{
        const setViewHeight = () => {
        const vh = window.innerHeight*0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`)
        }

        setViewHeight();

        window.addEventListener('resize', setViewHeight);

        return () => {
        window.removeEventListener('resize', setViewHeight)
        }
    },[])


    return (
        <div className="h-screen w-screen">
            <div className="h-full w-full flex flex-col-reverse bottom-0 sm:flex-col">
                <NavBar menuItems={menuItems} />
                <Grow in={displayContent} timeout={1000}>
                    <div className="flex-grow flex overflow-y-auto w-full justify-center z-10">
                        <Outlet />
                    </div>
                </Grow>
            </div>
        </div>
    )
}

export default Root;