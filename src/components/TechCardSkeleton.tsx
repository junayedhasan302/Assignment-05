const TechCardSkeleton = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm animate-pulse">
      <div className="flex justify-between items-center mb-4">
        <div className="w-8 h-8 bg-gray-200 rounded-md" />
        <div className="w-14 h-5 bg-gray-200 rounded-full" />
      </div>
      <div className="h-4 bg-gray-200 rounded w-2/3 mb-2" />
      <div className="h-3 bg-gray-200 rounded w-full mb-1" />
      <div className="h-3 bg-gray-200 rounded w-5/6 mb-4" />
      <div className="flex flex-wrap gap-2 mb-4">
        <div className="h-5 w-16 bg-gray-200 rounded-md" />
        <div className="h-5 w-16 bg-gray-200 rounded-md" />
        <div className="h-5 w-10 bg-gray-200 rounded-md" />
      </div>
      <div className="h-9 bg-gray-200 rounded-lg w-full" />
    </div>
  );
};

export default TechCardSkeleton;