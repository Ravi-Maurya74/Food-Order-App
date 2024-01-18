import { useEffect } from "react";
import { useState } from "react";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("http://localhost:3000/meals");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const meals = await response.json();
      setLoadedMeals(meals);
    }
    fetchMeals();
  }, []);

  return (
    <ul className=" grid grid-cols-2 md:grid-cols-3">
      {loadedMeals.map((meal) => (
        <li key={meal.id} className=" my-2">{meal.name}</li>
      ))}
    </ul>
  );
}
