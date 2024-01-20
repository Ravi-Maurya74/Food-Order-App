import { useContext } from "react";
import { currencyFormatter } from "../util/formatting"; 
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

export default function MealItem({ meal }) {
  const cartCtx = useContext(CartContext);
  
  function hanldeAddMealToCart() {
    cartCtx.addItem(meal);
  }
  return (
    <li className=" my-2 mx-2 shadow-xl rounded-md overflow-hidden bg-black text-center flex flex-col justify-between">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div className=" my-6 flex flex-col justify-between items-center">
          <h3 className=" font-bold text-2xl">{meal.name}</h3>
          <p className=" bg-yellow-950 py-1 px-2 m-4 text-yellow-300 font-bold">
            {currencyFormatter.format(meal.price)}
          </p>
          <p>{meal.description}</p>
        </div>
        <p>
          <Button onClick={hanldeAddMealToCart}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}
