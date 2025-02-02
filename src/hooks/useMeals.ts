import { useEffect, useState } from "react";
import { MealCardProps } from "../types/Memal";
import { getMeals } from "../services/api";

export const useMeals = () => {
  const [meals, setMeals] = useState<MealCardProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getMeals();
        setMeals(data);
      } catch (error: any) {
        setError(error.message || "An error occurred while fetching meals.");
        console.error("Error fetching meals:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { meals, loading, error };
};
