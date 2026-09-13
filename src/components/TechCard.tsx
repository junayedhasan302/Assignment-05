import type { TechnologyType } from '../types/technology';
import { toast } from 'react-toastify';

// Interface for TechCardProps
interface TechCardProps {
  tech: TechnologyType;
  isAdded: boolean;
  onAdd: (tech: TechnologyType) => void;
}

// Badge Color Conditions
function getBadgeColor(colorTheme: string) {
  if (colorTheme === "orange") {
    return "bg-orange-100 text-orange-700";
  } else if (colorTheme === "blue") {
    return "bg-blue-100 text-blue-700";
  } else if (colorTheme === "yellow") {
    return "bg-yellow-100 text-yellow-700";
  } else if (colorTheme === "slate") {
    return "bg-slate-100 text-slate-700";
  } else if (colorTheme === "cyan") {
    return "bg-cyan-100 text-cyan-700";
  } else if (colorTheme === "purple") {
    return "bg-purple-100 text-purple-700";
  } else if (colorTheme === "green") {
    return "bg-green-100 text-green-700";
  } else if (colorTheme === "black") {
    return "bg-gray-100 text-gray-700";
  } else if (colorTheme === "red") {
    return "bg-red-100 text-red-700";
  } else {
    return "bg-gray-100 text-gray-700";
  }
}

// If i hover the card (desktop) or tap the card (mobile/tablet), theme color will show as bg color
function getHoverBackground(colorTheme: string) {
  if (colorTheme === "orange") {
    return "hover:bg-orange-50 active:bg-orange-50";
  } else if (colorTheme === "blue") {
    return "hover:bg-blue-50 active:bg-blue-50";
  } else if (colorTheme === "yellow") {
    return "hover:bg-yellow-50 active:bg-yellow-50";
  } else if (colorTheme === "slate") {
    return "hover:bg-slate-50 active:bg-slate-50";
  } else if (colorTheme === "cyan") {
    return "hover:bg-cyan-50 active:bg-cyan-50";
  } else if (colorTheme === "purple") {
    return "hover:bg-purple-50 active:bg-purple-50";
  } else if (colorTheme === "green") {
    return "hover:bg-green-50 active:bg-green-50";
  } else if (colorTheme === "black") {
    return "hover:bg-gray-50 active:bg-gray-50";
  } else if (colorTheme === "red") {
    return "hover:bg-red-50 active:bg-red-50";
  } else {
    return "hover:bg-gray-50 active:bg-gray-50";
  }
}

const TechCard = ({ tech, isAdded, onAdd }: TechCardProps) => {
  return (
    // Card Div
    <div
      className={`bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-4.5 md:p-5 shadow-sm hover:shadow-lg active:shadow-lg hover:-translate-y-[1px] active:-translate-y-[1px] transition duration-200 h-full flex flex-col ${getHoverBackground(
        tech.colorTheme
      )}`}
    >
      {/* Logo, Badge  */}
      <div className="flex justify-between items-center mb-3 sm:mb-3.5 md:mb-4">
        {/* Logo */}
        <img
          src={tech.icon}
          alt={tech.name}
          className="w-7 h-7 sm:w-7.5 sm:h-7.5 md:w-8 md:h-8 object-contain"
        />
        {/* Badge  */}
        <span
          className={`text-[10px] sm:text-[11px] md:text-xs px-2 sm:px-2 md:px-2.5 py-0.5 md:py-1 rounded-full font-medium ${getBadgeColor(
            tech.colorTheme
          )}`}
        >
          {tech.badge}
        </span>
      </div>

      {/* Technology Name  */}
      <h3 className="font-bold text-gray-900 text-sm sm:text-[15px] md:text-base mb-1">
        {tech.name}
      </h3>
      {/* Technology Description */}
      <p className="text-xs sm:text-sm md:text-base font-medium text-gray-500 mb-3 sm:mb-3.5 md:mb-4 leading-relaxed">
        {tech.description}
      </p>

      {/* category, difficulty, rating  */}
      <div className="flex flex-wrap items-center gap-1.5 md:gap-2 text-[10px] sm:text-[11px] md:text-xs text-gray-500 mb-3 sm:mb-3.5 md:mb-4">
        <span className="bg-gray-200 px-1.5 md:px-2 py-0.5 md:py-1 rounded-md">
          {tech.category}
        </span>
        <span className="bg-gray-200 px-1.5 md:px-2 py-0.5 md:py-1 rounded-md">
          {tech.difficulty}
        </span>
        <span className="flex items-center gap-1">⭐ {tech.rating}</span>
      </div>

      {/* Add to Stack Button */}
      <button
        onClick={() =>
          isAdded ? toast.warning(`${tech.name} is already added to your stack`) : onAdd(tech)
        }
        className={
          isAdded
            ? "w-full bg-gray-200 text-gray-500 rounded-lg py-2 sm:py-2.5 text-xs sm:text-sm font-medium mt-auto"
            : "w-full bg-gray-900 text-white rounded-lg py-2 sm:py-2.5 text-xs sm:text-sm font-medium mt-auto cursor-pointer"
        }
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechCard;