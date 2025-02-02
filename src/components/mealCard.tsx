import React from "react";
import { FaTimesCircle } from "react-icons/fa";
import { MealCardProps } from "../types/Memal";

const MealCard: React.FC<MealCardProps> = ({
  id,
  name,
  image,
  cuisine,
  instructions,
  rating,
  mealType,
  onDelete,
  onSelect,
  selected,
}) => {
  const mealData = { id, name, image, cuisine, instructions, rating, mealType };

  return (
    <div
      className={`bg-white max-w-sm rounded-2xl shadow-lg overflow-hidden border border-gray-200 relative cursor-pointer ${
        selected ? "outline-4 outline-black" : ""
      }`}
      onClick={() => onSelect && onSelect(mealData)}
    >
      <div className="relative">
        <img className="w-full h-48 object-cover" src={image} alt={name} />
        <span className="absolute top-2 right-2 bg-black text-white text-xs px-3 py-1 rounded-full">
          {mealType}
        </span>
        {onDelete && id !== undefined && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(id);
            }}
            className="absolute top-2 left-2 text-red-500 hover:text-red-700"
          >
            <FaTimesCircle className="w-6 h-6" />
          </button>
        )}
      </div>
      <div className="p-5">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <div className="mt-2">
          <strong>Instructions:</strong>
          <div className="text-sm text-gray-600 mt-2 space-y-2">
            {instructions.slice(0, 3).map((instruction, index) => (
              <p key={index} className="text-gray-600">
                {instruction}
              </p>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="text-sm text-gray-500">
            <strong>Cuisine:</strong> {cuisine}
          </p>
          <div className="flex items-center">
            <strong className="mr-2 text-sm">Rating:</strong>
            <span className="text-yellow-500 font-bold mr-1">
              {rating.toFixed(1)}
            </span>
            <div className="flex">
              {Array.from({ length: Math.floor(rating) }).map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-4 h-4 text-yellow-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.425 8.208 1.17-5.941 5.785 1.402 8.182-7.337-3.857-7.336 3.857 1.401-8.182-5.94-5.785 8.207-1.17z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
