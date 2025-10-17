import { Button } from "@mui/material";
import { ReactElement } from "react";

export function Run4RightsButton({children, className, onClick}: {children: ReactElement, className?: string, onClick: Function}) {
    return (
        <div className={className}>
            <Button color="secondary.contrastText" className="flex justify-center align-center w-full h-full" onClick={()=>{onClick()}}>
                {children}
            </Button>
        </div>
    )
} 