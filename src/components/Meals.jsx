import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";

export default function Meals() {
  const { data:loadedMeals, isLoading, error } = useHttp("http://localhost:3000/meals",{},[]);

  return (
    <ul className=" grid grid-cols-2 md:grid-cols-3">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
 