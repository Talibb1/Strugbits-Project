export interface MealCardProps {
  id: number;
  name: string;
  image: string;
  cuisine: string;
  instructions: string[];
  rating: number;
  mealType: string[];
  caloriesPerServing?: number;
  cookTimeMinutes?: number;
  prepTimeMinutes?: number;
  servings?: number;
  difficulty?: string;
  ingredients?: string[];
  reviewCount?: number;
  tags?: string[];
  userId?: number;
  onDelete?: (id: number) => void;
  onSelect?: (meal: MealCardProps) => void;
  selected?: boolean;
}