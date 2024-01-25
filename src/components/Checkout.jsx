import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Input from "./UI/Input";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const cartTotal = cartCtx.items.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  function handleClose(){
    userProgressCtx.hideCheckout();
  }
  function handleSubmit(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const customerData = Object.fromEntries(formData.entries());
    fetch('https://react-http-6f0a4-default-rtdb.firebaseio.com/orders.json',{
      method: 'POST',
      body: JSON.stringify({
        order:{
          customer: customerData,
          items: cartCtx.items
        }
      })
    })
    .then(response => {
      if(response.ok){
        return response.json();
      }
      throw new Error('Something went wrong!');
    })
  }
  return (
    <Modal open={userProgressCtx.progress==='checkout'}>
      <form action="">
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)} </p>
        <Input label="Full Name" id="name" type="text" />
        <Input label="E-Mail Address" id="email" type="email" />
        <Input label="Street Address" id="street" type="text" />
        <div>
            <Input label="Postal Code" id="postal-code" type="text" />
            <Input label="City" id="city" type="text" />
        </div>
        <p>
            <Button type="button" textOnly onClick={handleClose}>Close</Button>
            <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}
