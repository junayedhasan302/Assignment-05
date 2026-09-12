import type { TechnologyType } from '../types/technology';

interface TechCardProps {
  tech: TechnologyType;
  isAdded: boolean;
  onAdd: (tech: TechnologyType) => void;
}

function getBadgeColor(badge: string) {
  if (badge === "Popular") {
    return "bg-blue-100 text-blue-600";
  } else if (badge === "Essential") {
    return "bg-orange-100 text-orange-600";
  } else if (badge === "Trending") {
    return "bg-purple-100 text-purple-600";
  } else if (badge === "Fast") {
    return "bg-red-100 text-red-600";
  } else if (badge === "Versatile") {
    return "bg-green-100 text-green-600";
  } else {
    return "bg-gray-100 text-gray-600";
  }
}

const TechCard = ({ tech, isAdded, onAdd }: TechCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-200 h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
        <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${getBadgeColor(tech.badge)}`}>
          {tech.badge}
        </span>
      </div>
      <h3 className="font-semibold text-gray-900 text-base mb-1">{tech.name}</h3>
      <p className="text-sm text-gray-500 mb-4 leading-relaxed">
        {tech.description}
      </p>
      <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 mb-4">
        <span className="bg-gray-100 px-2 py-1 rounded-md">{tech.category}</span>
        <span className="bg-gray-100 px-2 py-1 rounded-md">{tech.difficulty}</span>
        <span className="flex items-center gap-1">⭐ {tech.rating}</span>
      </div>
      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={
          isAdded
            ? "w-full bg-gray-200 text-gray-500 rounded-lg py-2.5 text-sm font-medium cursor-not-allowed mt-auto"
            : "w-full bg-gray-900 text-white rounded-lg py-2.5 text-sm font-medium mt-auto"
        }
      >
        {isAdded ? "Added" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechCard;