import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import { useContext } from "react";
import CartContext from "../store/CartContext";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const totalCartItems = cartCtx.items.reduce((total, item) => {
    return total + item.quantity;
  }
  , 0);
  return (
    <header className=" flex justify-between items-center mb-8">
      <div className=" flex items-center">
        <img src={logo} alt="A restaurant." className=" h-16 w-16 rounded-full border-yellow-300 border-solid border-2" />
        <h1 className=" mx-4 font-bold text-2xl">Food Shop</h1>
      </div>
      <nav>
        <Button textOnly classname=" text-2xl">Cart({totalCartItems})</Button>
      </nav>
    </header>
  );
}
