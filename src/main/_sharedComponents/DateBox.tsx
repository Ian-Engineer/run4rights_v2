import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";
import { TypographyVariant } from "@mui/material/styles";

const TYPOGRAPHY_SCALE: TypographyVariant[] = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "subtitle1",
  "subtitle2",
  "body1",
  "body2",
  "caption",
  "overline",
];

export function nextSmallerVariant(
  variant: TypographyVariant
): TypographyVariant {
  const i = TYPOGRAPHY_SCALE.indexOf(variant);

  if (i === -1) return variant;                 // button, inherit, custom
  if (i === TYPOGRAPHY_SCALE.length - 1) return variant; // already smallest

  return TYPOGRAPHY_SCALE[i + 1];
}

function formatCustomDate(date: Date) {
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    return {month, day, year};
}

export const RenderDate = ({eventDate, borderRadius, dateSize, displayYear = false}: {eventDate: Date, borderRadius: string, dateSize: TypographyVariant, displayYear?: boolean}): ReactNode => {
    let date = formatCustomDate(eventDate);
    return (
        <Box 
            sx={{
                backgroundColor: "secondary.main", 
                borderRadius: borderRadius, 
                margin: "10px", 
                padding: "10px", 
                textAlign: "center", 
                display: "flex", 
                alignItems: "center",
                maxHeight: "fit-content",
                aspectRatio: "1",
                minWidth: { xs: 90, sm: 120, md: 120 },
            }}
            className='flex flex-col align-center justify-center text-center'
        >
            <div className={`flex justify-center align-center items-center ${displayYear ? "flex-row gap-2" : "flex-col"}`}>
                <Typography fontWeight={700} variant={dateSize}>{date.month}</Typography>
                <Typography fontWeight={700} variant={dateSize}>{date.day}</Typography>
            </div>
            {displayYear ? <Typography fontWeight={700} variant={nextSmallerVariant(nextSmallerVariant(dateSize))}>{date.year}</Typography> : null}
        </Box>
    )
}