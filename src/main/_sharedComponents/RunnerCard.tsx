import { Paper, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { Runner } from "models";
import { useMemo, useState } from "react";

type RunnerCardProps = {
  runner: Runner;
  onClick?: () => void;
};

export function RunnerCard({ runner, onClick }: RunnerCardProps) {
  const rotation = useMemo(() => (Math.random() - 0.5) * 16, []);
  const clickable = !!onClick;

  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const imgSrc = `/images/runners/${runner.name.toLowerCase()}.webp`;

  return (
    <div
      onClick={onClick}
      className={`
        relative flex items-center
        ${clickable ? "cursor-pointer group" : ""}
      `}
    >
      {/* POLAROID */}
      <div
        className="
          relative z-10
          bg-[#fdfcf7]
          p-1.5 pb-0
          w-[110px]
          shrink-0
          shadow-[0_8px_18px_rgba(0,0,0,0.25)]
          transition-transform duration-200
          group-hover:scale-105
        "
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {/* Placeholder shown while loading OR if error */}
        {(!imgLoaded || imgError) && (
          <div className="w-full aspect-square bg-gray-200 flex items-center justify-center">
            <PersonIcon sx={{ fontSize: 48, opacity: 0.6 }} />
          </div>
        )}

        {/* Real image (hidden until loaded) */}
        {!imgError && (
          <img
            src={imgSrc}
            alt={runner.name}
            onLoad={() => setImgLoaded(true)}
            onError={() => {
              setImgError(true);
              setImgLoaded(false);
            }}
            className={`
              w-full h-auto object-contain bg-gray-200 block
              ${imgLoaded ? "block" : "hidden"}
            `}
          />
        )}

        {/* Caption */}
        <Typography
          className="text-black text-center font-light p-0.5"
          variant="body1"
          style={{ fontFamily: "Lazy Dog, cursive" }}
        >
          {runner.name}
        </Typography>
      </div>

      {/* OVERLAPPED PAPER */}
      <Paper
        elevation={3}
        className="
          relative
          -ml-8
          pl-12
          pt-4 pb-4 pr-5
          rounded-xl
          max-w-sm
        "
      >
        <Typography variant="body1" className="leading-relaxed">
          {runner.description}
        </Typography>

        {runner.miles != null && (
          <div
            className="
              mt-3 inline-block
              bg-emerald-100 text-emerald-700
              px-3 py-1 rounded-full
              font-semibold text-sm
            "
          >
            {runner.miles} miles run
          </div>
        )}
      </Paper>
    </div>
  );
}
