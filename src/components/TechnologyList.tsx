import { useState, useEffect } from "react";
import type { TechnologyType } from "../types/technology";
import TechCard from "./TechCard";

interface TechnologyListProps {
  stack: TechnologyType[];
  onAdd: (tech: TechnologyType) => void;
}

function TechnologyList({ stack, onAdd }: TechnologyListProps) {
  const [technologies, setTechnologies] = useState<TechnologyType[]>([]);

  useEffect(() => {
    fetch("/technology.json")
      .then((response) => response.json())
      .then((data) => setTechnologies(data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-1">
        Explore the <span className="text-pink-500">Technologies</span>
      </h1>
      <p className="text-gray-500 mb-6">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {technologies.map((tech) => {
          const isAdded = stack.some((item) => item.id === tech.id);
          return (
            <TechCard
              key={tech.id}
              tech={tech}
              isAdded={isAdded}
              onAdd={onAdd}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TechnologyList;