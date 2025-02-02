import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const getMeals = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.recipes;
  } catch (error) {
    console.error('Error fetching meals:', error);
    return [];
  }
};
