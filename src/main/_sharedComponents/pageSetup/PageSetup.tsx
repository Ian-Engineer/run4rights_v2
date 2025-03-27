import { Fade, Grow } from "@mui/material"
import { useEffect, Children } from "react"

export const PageSetup = ({children, open = true, timeout = 500, margin = true}) => {

    const className = margin ? 'max-w-full max-h-full w-full flex flex-col justify-center items-center text-center m-5' : 'max-w-full max-h-full w-full flex flex-col justify-center items-center text-center';

    return (
        <div className={className}>
            <Grow in={open} timeout={timeout}>
                { children }
            </Grow>
        </div>
    )
}