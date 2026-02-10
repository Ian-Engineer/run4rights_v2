import { Outlet } from "react-router-dom";
import NavBar from "main/navbar";

function Root() {

    return (
        <div className="h-[100dvh] w-screen overflow-hidden">
            <div className="h-full w-full flex flex-col-reverse bottom-0 sm:flex-col">
                <NavBar />
                <div className="flex-grow flex overflow-y-auto w-full justify-center z-10">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Root;