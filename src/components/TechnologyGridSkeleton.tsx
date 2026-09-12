import TechCardSkeleton from "./TechCardSkeleton";

const TechnologyGridSkeleton = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-1">
        Explore the <span className="text-pink-500">Technologies</span>
      </h1>
      <p className="text-gray-500 mb-6">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <TechCardSkeleton />
        <TechCardSkeleton />
        <TechCardSkeleton />
        <TechCardSkeleton />
        <TechCardSkeleton />
        <TechCardSkeleton />
        <TechCardSkeleton />
        <TechCardSkeleton />
        <TechCardSkeleton />
        <TechCardSkeleton />
        <TechCardSkeleton />
        <TechCardSkeleton />
        <TechCardSkeleton />
        <TechCardSkeleton />
        <TechCardSkeleton />

      </div>
    </div>
  );
};

export default TechnologyGridSkeleton;