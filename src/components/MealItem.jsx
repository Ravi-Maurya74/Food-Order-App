export default function MealItem({ meal }) {
  return (
    <li className=" my-2 mx-2 shadow-xl rounded-md overflow-hidden bg-black text-center flex flex-col justify-between">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div className=" my-6 flex flex-col justify-between items-center">
          <h3 className=" font-bold text-2xl">{meal.name}</h3>
          <p className=" bg-yellow-950 py-1 px-2 m-4 text-yellow-300 font-bold">
            {meal.price}
          </p>
          <p>{meal.description}</p>
        </div>
        <p>
          <button className=" bg-white text-black p-1 text-sm rounded-sm">
            Add to cart.
          </button>
        </p>
      </article>
    </li>
  );
}
