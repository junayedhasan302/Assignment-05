import type { TechnologyType } from '../types/technology';

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
  } else {
    return "bg-gray-100 text-gray-700";
  }
}

// If i hover the card then the technology theme color will showed as a bg color
function getHoverBackground(colorTheme: string) {
  if (colorTheme === "orange") {
    return "hover:bg-orange-50";
  } else if (colorTheme === "blue") {
    return "hover:bg-blue-50";
  } else if (colorTheme === "yellow") {
    return "hover:bg-yellow-50";
  } else if (colorTheme === "slate") {
    return "hover:bg-slate-50";
  } else if (colorTheme === "cyan") {
    return "hover:bg-cyan-50";
  } else if (colorTheme === "purple") {
    return "hover:bg-purple-50";
  } else if (colorTheme === "green") {
    return "hover:bg-green-50";
  } else if (colorTheme === "black") {
    return "hover:bg-gray-50";
  } else {
    return "hover:bg-gray-50";
  }
}

const TechCard = ({ tech, isAdded, onAdd }: TechCardProps) => {
  return (
    // Card Div
    <div className={`bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-200 h-full flex flex-col ${getHoverBackground(tech.colorTheme)}`}>
      {/* Logo, Badge  */}
      <div className="flex justify-between items-center mb-4">
        {/* Logo */}
        <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
        {/* Badge  */}
        <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${getBadgeColor(tech.colorTheme)}`}>
          {tech.badge}
        </span>
      </div>

      {/* Technology NAme  */}
      <h3 className="font-bold text-gray-900 text-base mb-1">{tech.name}</h3>
      {/* Technology Description */}
      <p className="font-medium text-gray-500 mb-4 leading-relaxed">
        {tech.description}
      </p>

      {/* category, difficulty, rating  */}
      <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 mb-4">
        <span className="bg-gray-200 px-2 py-1 rounded-md">{tech.category}</span>
        <span className="bg-gray-200 px-2 py-1 rounded-md">{tech.difficulty}</span>
        <span className="flex items-center gap-1">⭐ {tech.rating}</span>
      </div>

      {/* Add to cart Button */}
      <button onClick={() => onAdd(tech)} disabled={isAdded}
        className={
          isAdded
            ? "w-full bg-gray-200 text-gray-500 rounded-lg py-2.5 text-sm font-medium mt-auto"
            : "w-full bg-gray-900 text-white rounded-lg py-2.5 text-sm font-medium mt-auto cursor-pointer"
        }
      >
        {isAdded ? "Added" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechCard;