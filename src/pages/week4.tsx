import React, { useEffect, useState } from "react";
import { MealCardProps } from "../types/Memal";
import MealCard from "../components/mealCard";
import Navbar from "../components/navbar";
import Header from "../components/header";

const loadMealsFromLocalStorage = (): MealCardProps[] => {
  const storedData = localStorage.getItem("weekMeals");
  const weekData = storedData ? JSON.parse(storedData)["Week 4"] : [];
  return weekData || [];
};

const saveMealsToLocalStorage = (meals: MealCardProps[]) => {
  const existingData = JSON.parse(localStorage.getItem("weekMeals") || "{}");
  existingData["Week 4"] = meals;
  localStorage.setItem("weekMeals", JSON.stringify(existingData));
};

const Week4: React.FC = () => {
  const [meals, setMeals] = useState<MealCardProps[]>(
    loadMealsFromLocalStorage()
  );

  useEffect(() => {
    saveMealsToLocalStorage(meals);
  }, [meals]);

  const handleDeleteMeal = (mealId: number) => {
    const updatedMeals = meals.filter((meal) => meal.id !== mealId);
    setMeals(updatedMeals);
  };

  return (
    <div>
      <Header />
      <h1 className="text-3xl font-bold text-gray-800 mb-4 text-left flex items-center">
        Week Orders
      </h1>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 p-4 background">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 justify-items-center">
          {meals.length === 0 ? (
            <div className="col-span-full text-center">
              No meals available for Week 4.
            </div>
          ) : (
            meals.map((meal) => (
              <MealCard key={meal.id} {...meal} onDelete={handleDeleteMeal} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Week4;
