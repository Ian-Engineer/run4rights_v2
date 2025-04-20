import { TextField } from "@mui/material";
import { useEffect } from "react";

function IanTextField(
    {
        value,
        valueChange,
        className, 
        label, 
        required = false, 
        multiline = false, 
        rows = 1,
        color = 'secondary',
        error = null,
    }: {
        value: string,
        valueChange: Function,
        className: string,
        label: string,
        required?: boolean,
        multiline?: boolean,
        rows?: number,
        color?: 'primary' | 'secondary' | 'error' | 'warning' | "info" | "success",
        error?: string | null
    }
) {
    return (
        <TextField
            className={className}
            label={label}
            required={required}
            multiline={multiline}
            rows={rows}
            color={color}
            value={value}
            error={Boolean(error)}
            helperText={Boolean(error) ? error : " "}
            onChange={(e)=>{valueChange(e.target.value)}}
        />
    )
} 

export default IanTextField