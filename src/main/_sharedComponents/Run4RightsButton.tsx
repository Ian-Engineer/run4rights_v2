import { Button, Typography } from "@mui/material";

const placeHolderOnClick = (text: string) => {
    console.error("No onclick provided for button: ", text)
}

export function Run4RightsButton({text, className = "", onClick = () => placeHolderOnClick(text)}: {text: string, className?: string, onClick?: Function}) {

    return (
        <div className={className}>
            <Button color="secondary" className={className} onClick={()=>{onClick()}} sx={{ }}>
                <Typography variant='h5' fontWeight={'500'} className="pr-2 pl-2">
                    {text}
                </Typography>
            </Button>
        </div>
    )
} 