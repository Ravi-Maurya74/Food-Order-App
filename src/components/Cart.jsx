import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./CartItem";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const cartTotal = cartCtx.items.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }
  return (
    <Modal open={userProgressCtx.progress === "cart"}>
      <h2 className=" text-xl font-bold">Your Cart.</h2>
      <ul>
        {cartCtx.items.map((item) => {
          return (
            <CartItem
              key={item.id}
              onIncrease={() => cartCtx.addItem(item)}
              onDecrease={() => cartCtx.removeItem(item.id)}
              {...item}
            />
          );
        })}
      </ul>
      <p className=" text-right">{currencyFormatter.format(cartTotal)}</p>
      <p className=" text-right">
        <Button textOnly classname=" text-black" onClick={handleCloseCart}>
          Close
        </Button>
        {cartCtx.items.length>0 && (
          <Button onClick={handleCloseCart}>Go to Checkout.</Button>
        )}
      </p>
    </Modal>
  );
}
