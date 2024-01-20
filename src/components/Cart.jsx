import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const cartTotal = cartCtx.items.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);
  return (
    <Modal>
      <h2>Your Cart.</h2>
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
      <p>{currencyFormatter.format(cartTotal)}</p>
      <p>
        <Button textOnly>Close</Button>
        <Button>Go to Checkout.</Button>
      </p>
    </Modal>
  );
}
