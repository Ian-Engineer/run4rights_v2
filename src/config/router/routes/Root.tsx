import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import LandingPage from "../../../main/landing";
import { Grow } from "@mui/material";
import NavBar from "../../../main/navbar";
import { navbar } from "../../models";

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
        name: 'Pottery',
        url: '/pottery'
    }
]

function Root() {
    // implement a Drawer for the left side navigation
    // implement app bar for the top of screen menu bar
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
        setTimeout(()=>setLoading(false),1000)
    }, [])

    return (
        <div className="max-h-screen h-screen max-w-screen w-screen">
            { loading ? 
            <LandingPage />
            :
                <div className="h-full w-full flex flex-col-reverse bottom-0 sm:flex-col">
                    <NavBar menuItems={menuItems} />
                    <Grow in={!loading}>
                        <div className="flex-grow flex overflow-y-auto w-full justify-center z-10">
                            <Outlet />
                        </div>
                    </Grow>
                </div>
            }
        </div>
    )
}

export default Root;