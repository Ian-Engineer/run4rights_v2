// implement a Drawer for the left side navigation
// implement app bar for the top of screen menu bar

import { Outlet } from "react-router-dom";

function Root() {
    return (
        <div className="max-h-screen h-screen max-w-screen w-screen flex flex-col flex-grow">
            App Bar
            <div className="flex-grow flex overflow-y-auto w-full justify-center z-10">
                <Outlet />
            </div>
        </div>
    )
}

export default Root;