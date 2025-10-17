import { Box, Typography, Grow } from "@mui/material"
import { Person } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Events } from "models";
import { Run4RightsPaper } from "./IanPaper";
import { useNavigate } from "react-router-dom";

    const dimensions: any = {
        small: {
            header: 'h4',
            body: 'body3',
            roleIcon: 'xs',
            imageSize: '60px',
            imageTranslate: 'translatex(-12px)',
            backupImage: 'medium',
            imagePlaceholder: '50px',
            backupImagePlaceholder: '30px',
        },
        medium: {
            header: 'h3',
            body: 'body2',
            roleIcon: 'small',
            imageSize: '72px',
            imageTranslate: 'translatex(-15px)',
            backupImage: 'large',
            imagePlaceholder: '57px',
            backupImagePlaceholder: '36px',
        },
        large: {

        },
        xl: {
            header: 'h5',
            body: 'body2',
            roleIcon: 'xl',
            imageSize: '96px',
            imageTranslate: 'translatex(-5px)',
            backupImage: 'large',
            imagePlaceholder: '114px',
            backupImagePlaceholder: '72px',
            textTranslate: 'translatex(80px)',
        }
    }

const EventCard = ({event, size = 'xl', future = false}: {event: Events.Event, size?: string, future?: boolean}) => {
    const [imageError, setImageError] = useState(false)
    const [loaded, setLoaded] = useState(true);
    const navigate = useNavigate();

    function formatToDollars(amount: number): string {
        const USDollar = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });

        return USDollar.format(amount);
    }
    

    const renderText = (event: Events.Event, size: string) => {
        return (
            <Box
                className='flex flex-col w-full gap-2 justify-around text-center'
            >
                <Typography variant={dimensions[size].header}>
                    {event.organization}
                </Typography>
                {future ? 
                    null 
                :
                    <Typography variant={dimensions[size].body} fontWeight={'bold'} className="text-right pr-2">
                        Money Raised: {formatToDollars(event.raised)}
                    </Typography>
                }
            </Box>
        )
    }

    function formatCustomDate(date: Date): string {
        const months = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];

        const month = months[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear();

        return `${month} ${day} ${year}`;
    }

    const renderDate = (event: Events.Event, size: string) => {
        return (
            <Box sx={{backgroundColor: "white", borderRadius: "50px", margin: "10px", padding: "10px", textAlign: "center", display: "flex", alignItems: "center"}}>
                <Typography variant={dimensions[size].header}>{formatCustomDate(new Date(event.date))}</Typography>
            </Box>
        )
    }

    const handleClick = () => {
        navigate(`/event/${event.id}`)
    }

    return (
        <div onClick={handleClick}>
        <Run4RightsPaper
            className={`flex flex-row items-center w-full min-w-fit relative hover:cursor-pointer hover:scale-102`}
        >
            <>
                {renderDate(event, size)}
                {renderText(event, size)}
            </>
        </Run4RightsPaper>
        </div>
    )
}

export default EventCard