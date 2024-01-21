import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import { useContext } from "react";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((total, item) => {
    return total + item.quantity;
  }
  , 0);

  function handleShowCart() {
    userProgressCtx.showCart();
  }
  return (
    <header className=" flex justify-between items-center mb-8">
      <div className=" flex items-center">
        <img src={logo} alt="A restaurant." className=" h-16 w-16 rounded-full border-yellow-300 border-solid border-2" />
        <h1 className=" mx-4 font-bold text-2xl">Food Shop</h1>
      </div>
      <nav>
        <Button textOnly classname=" text-2xl" onClick={handleShowCart}>Cart({totalCartItems})</Button>
      </nav>
    </header>
  );
}
