import { Runner } from "models"; 

type RunnerCardProps = {
  runner: Runner;
  onClick?: () => void;
};

export function RunnerCard({ runner, onClick }: RunnerCardProps) {
  return (
    <div
      onClick={onClick}
      className="
        group cursor-pointer
        bg-white rounded-2xl
        shadow-sm hover:shadow-lg
        transition-all duration-200
        border border-gray-100
        p-4
      "
    >
      <div className="flex gap-4">
        {/* Photo */}
        <img
          src={runner.photo}
          alt={runner.name}
          className="
            w-20 h-20
            rounded-xl
            object-cover
            shrink-0
          "
        />

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header row */}
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-lg font-semibold text-gray-900 truncate">
              {runner.name}
            </h3>

            <span
              className="
                bg-emerald-100 text-emerald-700
                text-sm font-semibold
                px-3 py-1
                rounded-full
                whitespace-nowrap
              "
            >
              {runner.miles} mi
            </span>
          </div>

          {/* Description */}
          <p
            className="
              text-sm text-gray-600
              mt-1
              line-clamp-3
            "
          >
            {runner.description}
          </p>
        </div>
      </div>

      {/* subtle hover bar */}
      <div
        className="
          mt-4 h-1 w-0
          bg-emerald-400
          rounded-full
          transition-all duration-200
          group-hover:w-full
        "
      />
    </div>
  );
}
