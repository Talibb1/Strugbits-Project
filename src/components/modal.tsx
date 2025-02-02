import React, { useState, useEffect } from "react";
import { MealCardProps } from "../types/Memal";
import { showSuccessToast, showErrorToast } from "../components/toastProvider";

interface ModalProps {
  onClose: () => void;
  selectedMeals: MealCardProps[];
}

const Modal: React.FC<ModalProps> = ({ onClose, selectedMeals = [] }) => {
  const [selectedWeek, setSelectedWeek] = useState<string | null>(null);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleSelectWeek = (week: string) => {
    setSelectedWeek(week);
  };

  const handleSave = () => {
    if (selectedWeek) {
      const existingData = JSON.parse(localStorage.getItem("weekMeals") || "{}");
      const weekKey = selectedWeek;
      const existingMeals = existingData[weekKey] || [];
      const duplicateMeals = selectedMeals.filter((newMeal) =>
        existingMeals.some((existingMeal: MealCardProps) => existingMeal.id === newMeal.id)
      );
      if (duplicateMeals.length > 0) {
        const duplicateNames = duplicateMeals.map((meal) => meal.name).join(", ");
        showErrorToast(`The following meals already exist for ${weekKey}: ${duplicateNames}`);
      }
      const newMeals = selectedMeals.filter(
        (newMeal) => !existingMeals.some((existingMeal: MealCardProps) => existingMeal.id === newMeal.id)
      );
      if (newMeals.length > 0) {
        const updatedMeals = [...existingMeals, ...newMeals];
        existingData[weekKey] = updatedMeals;
        localStorage.setItem("weekMeals", JSON.stringify(existingData));
        showSuccessToast(`New meals saved for ${selectedWeek}`);
      } else {
        showErrorToast("No new meals to save.");
      }

      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div
        className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md mx-4 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Select Week
        </h2>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {["Week 1", "Week 2", "Week 3", "Week 4"].map((week, index) => (
            <button
              key={index}
              className={`py-3 px-4 border-2 rounded-xl transition-all ${
                selectedWeek === week
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 hover:bg-gray-100 border-gray-300"
              }`}
              onClick={() => handleSelectWeek(week)}
            >
              {week}
            </button>
          ))}
        </div>
        <div className="flex justify-between mt-6">
          <button
            className="bg-red-500 text-white py-2 px-6 rounded-xl hover:bg-red-600 transition-all"
            onClick={onClose}
          >
            Close
          </button>
          <button
            className={`py-2 px-6 rounded-xl ${
              selectedWeek
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            } transition-all`}
            onClick={handleSave}
            disabled={!selectedWeek}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
