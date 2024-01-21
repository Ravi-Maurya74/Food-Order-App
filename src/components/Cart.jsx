import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const cartTotal = cartCtx.items.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);
  return (
    <Modal open={userProgressCtx.progress==='cart'}>
      <h2 className=" text-xl font-bold">Your Cart.</h2>
      <ul>
        {cartCtx.items.map((item) => {
          return (
            <li key={item.id}>
              <div>
                <h3>{item.name}</h3>
                <div>
                  <span>{item.quantity}</span>
                  <span>x</span>
                  <span>{item.price}</span>
                </div>
              </div>
              <div>
                <button>-</button>
                <button>+</button>
              </div>
            </li>
          );
        })}
      </ul>
      <p className=" text-right">{currencyFormatter.format(cartTotal)}</p>
      <p className=" text-right">
        <Button textOnly classname=" text-black">Close</Button>
        <Button>Go to Checkout.</Button>
      </p>
    </Modal>
  );
}
