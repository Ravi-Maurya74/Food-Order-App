import { currencyFormatter } from "../util/formatting";

export default function CartItem({
  name,
  quantity,
  price,
  onIncrease,
  onDecrease,
}) {
  return (
    <li className=" flex justify-between items-center">
      <p>
        {name} - {quantity} x {currencyFormatter.format(price)}
      </p>
      <p>
        <button
          className=" text-lg m-1  rounded-full bg-black text-yellow-50 h-6 w-6"
          onClick={onDecrease}
        >
          -
        </button>
        <span className=" mx-1">{quantity}</span>
        <button
          className=" text-lg m-1  rounded-full bg-black text-yellow-50 h-6 w-6"
          onClick={onIncrease}
        >
          +
        </button>
      </p>
    </li>
  );
}
