import { Box, Typography } from "@mui/material"
import { Event } from "models";
import { useNavigate } from "react-router-dom";
import { Run4RightsButton } from "./Run4RightsButton";
import { RenderDate } from "./DateBox";
import { TypographyVariant } from "@mui/material/styles";

    const dimensions: any = {
        small: {
            header: 'h5',
            body: 'body3',
            roleIcon: 'xs',
            imageSize: '60px',
            imageTranslate: 'translatex(-12px)',
            backupImage: 'medium',
            imagePlaceholder: '50px',
            backupImagePlaceholder: '30px',
        },
        medium: {
            header: 'h4',
            body: 'body2',
            roleIcon: 'small',
            imageSize: '72px',
            imageTranslate: 'translatex(-15px)',
            backupImage: 'large',
            imagePlaceholder: '57px',
            backupImagePlaceholder: '36px',
            dateSquareSize: "size-24",
            borderRadius: "10px",
            dateSize: "h3"
        },
        large: {

        },
        xl: {
            header: 'h3',
            body: 'body2',
            roleIcon: 'xl',
            imageSize: '96px',
            imageTranslate: 'translatex(-5px)',
            backupImage: 'large',
            imagePlaceholder: '114px',
            backupImagePlaceholder: '72px',
            textTranslate: 'translatex(80px)',
            dateSquareSize: "size-32"
        }
    }

const EventCard = ({event, size = 'medium', future = false}: {event: Event, size?: string, future?: boolean}) => {
    const navigate = useNavigate();
    const fromAdmin = location.pathname.startsWith("/admin/modify-event");

    function formatToDollars(amount: number): string {
        const USDollar = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });

        return USDollar.format(amount);
    }
    
    function parseLocalDate(dateStr: string) {
        const [y, m, d] = dateStr.split('-').map(Number);
        return new Date(y, m - 1, d);
    }

    const RenderText = ({event, size}: {event: Event, size: string}) => {
        return (
            <Box
                className='flex flex-col w-full gap-2 text-left'
                sx={{color: "primary.main"}}
            >
                <Typography variant={dimensions[size].header}>
                    {event.organization}
                </Typography>
                {event.description ? 
                    <Typography className="hidden sm:block" variant={dimensions[size].body}>
                        {event.description}
                    </Typography>
                    :
                    null
                }
                <div className="flex flex-row justify-between items-center">
                    <Run4RightsButton text={fromAdmin ? "Modify" : "See More"} onClick={handleClick}/>
                    {future ? 
                        null 
                    :
                        <Typography variant={dimensions[size].body} fontWeight={'bold'} className="text-right pr-2">
                            Money Raised: {formatToDollars(event.moneyRaised)}
                        </Typography>
                    }
                </div>
            </Box>
        )
    }

    const handleClick = () => {
        if (fromAdmin) {
            navigate(`/admin/modify-event/${event.id}`);
            return;
        }
        navigate(`/event/${event.id}`)
    }

    return (
        <div className="flex flex-row gap-6 items-center">
            <RenderDate eventDate={parseLocalDate(event.eventDate)} dateSize={dimensions[size].dateSize as TypographyVariant} borderRadius={dimensions[size].borderRadius}/>
            <RenderText event={event} size={size}/>
        </div>
    )
}

export default EventCard