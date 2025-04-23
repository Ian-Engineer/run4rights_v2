import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Grow, Box } from "@mui/material";
import NavBar from "main/navbar";
import { navbar } from "models";

const menuItems: navbar.navbarMenuItem[] = [
    {
        name: 'About Me',
        url: '/'
    },
    {
        name: 'Software',
        url: '/software'
    },
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
        name: 'Ceramics',
        url: '/ceramics'
    }
]

function Root() {
    // implement a Drawer for the left side navigation
    // implement app bar for the top of screen menu bar
    const [gifLoaded, setGifLoaded] = useState<boolean>(false);
    const [displayContent, setDisplayContent] = useState<boolean>(false);

    useEffect(() => {
        const img = new Image();
        img.src = '/background.gif';
        img.onload = () => {
            setGifLoaded(true);
            setTimeout(()=>setDisplayContent(true),20*44)
        }
    }, []);

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
        <div className="h-full w-full">
            { gifLoaded ? 
                <Box
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url('/background.gif')`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundAttachment: 'fixed',
                        zIndex: '-1'
                    }}
                    className="h-full w-full"
                />
                :
                null
            }
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