import { Box, Typography } from "@mui/material";
import { IMAGE_FILES } from "config/imageManifest";

type PolaroidGalleryProps = {
  eventId: string;
};

export function PolaroidGallery({ eventId }: PolaroidGalleryProps) {
  const files = IMAGE_FILES.filter((name: string) =>
    name.startsWith(`${eventId} `)
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 4,
        justifyContent: "center",
      }}
    >
      {files.map(name => (
        <PolaroidPhoto
          key={name}
          src={`/images/${name}`}
          caption={captionFromFilename(name, eventId)}
        />
      ))}
    </Box>
  );
}

function captionFromFilename(name: string, eventId: string) {
  return name
    .replace(`${eventId} `, "")
    .replace(/\.[^/.]+$/, "");
}


type PolaroidPhotoProps = {
  src: string;
  caption: string;
};

function PolaroidPhoto({ src, caption }: PolaroidPhotoProps) {
  const rotation = (Math.random() - 0.5) * 16; // -3° to +3°

  return (
    <Box
      sx={{
        background: "#fdfcf7",
        padding: "12px 12px 12px 12px", // thicker bottom
        boxShadow: "0 8px 18px rgba(0,0,0,0.25)",
        borderRadius: "2px",
        width: 220,
        transform: `rotate(${rotation}deg)`,
        transition: "transform 0.2s ease",
        "&:hover": {
          transform: `rotate(${rotation}deg) scale(1.04)`,
        },
      }}
    >
        <Box
        component="img"
        src={src}
        alt={caption}
        sx={{
            width: "100%",
            height: "auto",        // ⭐ preserve ratio
            display: "block",
            objectFit: "contain",  // ⭐ no crop
            backgroundColor: "#eee", // optional — looks nice for letterbox
        }}
        />


      <Typography
        variant="body2"
        sx={{
          textAlign: "center",
          mt: 1.5,
          fontFamily: "Lazy Dog, cursive",
          fontWeight: 300,
          fontSize: "1.5rem",
        }}
        color="#000"
      >
        {caption}
      </Typography>
    </Box>
  );
}
