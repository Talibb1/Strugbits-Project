import React, { Suspense, useState } from "react";
import { useMeals } from "../hooks/useMeals";
import Header from "../components/header";
import MealCard from "../components/mealCard";
import MealCardSkeleton from "../components/mealCardSkeleton";
import Navbar from "../components/navbar";
import Modal from "../components/modal";
import { MealCardProps } from "../types/Memal";

const HomePage: React.FC = () => {
  const { meals, loading, error } = useMeals();
  const [selectedMeals, setSelectedMeals] = useState<MealCardProps[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectMeal = (meal: MealCardProps) => {
    setSelectedMeals((prevSelected) => {
      const isAlreadySelected = prevSelected.some(
        (selected) => selected.id === meal.id
      );

      return isAlreadySelected
        ? prevSelected.filter((selected) => selected.id !== meal.id)
        : [...prevSelected, meal];
    });
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Header />
      <h1 className="text-3xl font-bold text-gray-800 mb-4 text-left flex items-center">
        Week Orders
      </h1>

      <Navbar selectedMeals={selectedMeals} />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 p-4 background">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 justify-items-center">
          {loading ? (
            <Suspense>
              <div className="col-span-full text-center">
                <MealCardSkeleton />
              </div>
            </Suspense>
          ) : error ? (
            <div className="col-span-full text-center">
              Error loading meals: {error}
            </div>
          ) : (
            meals.map((meal) => (
              <MealCard
                key={meal.id}
                {...meal}
                onSelect={() => handleSelectMeal(meal)}
                selected={selectedMeals.some(
                  (selected) => selected.id === meal.id
                )}
              />
            ))
          )}
        </div>
      </div>

      {isModalOpen && (
        <Modal onClose={closeModal} selectedMeals={selectedMeals} />
      )}
    </>
  );
};

export default HomePage;
