import type { TechnologyType } from '../types/technology';

interface TechCardProps {
  tech: TechnologyType;
}

const TechCard = ({ tech }: TechCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
        <span className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 font-medium">
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
      <button className="w-full bg-gray-900 text-white rounded-lg py-2.5 text-sm font-medium">
        Add to Stack
      </button>
    </div>
  );
};

export default TechCard;