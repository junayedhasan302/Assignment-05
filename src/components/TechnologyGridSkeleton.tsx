import TechCardSkeleton from "./TechCardSkeleton";

// technology.json e ekhon 21 ta technology ache, notun kichu jog korle ei number ta update korte hobe, idonno how can i increase this number dynamically
const skeletonCount = 21;

const TechnologyGridSkeleton = () => {
  const skeletonList = Array(skeletonCount).fill(0);

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-1">
        Loading...
      </h1>
      <p className="text-gray-500 mb-6">
        Just wait 0.001 second to Pick one technology per category to build your ideal stack 😂
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skeletonList.map((_, index) => (
          <TechCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};

export default TechnologyGridSkeleton;