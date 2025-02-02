import React from "react";

const MealCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white max-w-sm rounded-2xl shadow-lg overflow-hidden border border-gray-200 relative animate-pulse">
      <div className="relative">
        <div className="w-full h-48 bg-gray-300 rounded-t-lg"></div>
        <div className="absolute top-2 right-2 bg-gray-400 text-transparent text-xs px-3 py-1 rounded-full">
          &nbsp;
        </div>
      </div>
      <div className="p-5">
        <div className="h-6 bg-gray-300 rounded mb-2 w-2/3"></div>
        <div className="mt-2">
          <div className="h-4 bg-gray-300 rounded mt-2 mb-2 w-1/2"></div>
          <div className="h-4 bg-gray-300 rounded mt-2 mb-2 w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded mt-2 mb-2 w-1/2"></div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
          <div className="flex items-center">
            <div className="h-4 bg-gray-300 rounded w-12 mr-2"></div>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-4 h-4 bg-gray-300 rounded-full"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealCardSkeleton;
