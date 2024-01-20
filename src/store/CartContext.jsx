import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

function cardReducer(state, action) {
  if (action.type === "ADD") {
    const existingCardItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const updatedItems = [...state.items];
    if (existingCardItemIndex > -1) {
      const updatedItem = {
        ...state.items[existingCardItemIndex],
        quantity: state.items[existingCardItemIndex].quantity + 1,
      };
      updatedItems[existingCardItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }
    return {
      ...state,
      items: updatedItems,
    };
  }
  if (action.type === "REMOVE") {
    const existingCardItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCardItem = state.items[existingCardItemIndex];
    const updatedItems = [...state.items];
    if (existingCardItem.quantity === 1) {
      updatedItems.splice(existingCardItemIndex, 1);
    } else {
      const updatedItem = {
        ...existingCardItem,
        quantity: existingCardItem.quantity - 1,
      };
      updatedItems[existingCardItemIndex] = updatedItem;
    }
    return {
      ...state,
      items: updatedItems,
    };
  }
  if (action.type === "CLEAR") {
    return {
      ...state,
      items: [],
    };
  }
  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cardReducer, { items: [] });

  function addItem(item) {
    dispatchCartAction({ type: "ADD", item: item });
  }

  function removeItem(id) {
    dispatchCartAction({ type: "REMOVE", id: id });
  }

  const cartContext = {
    items: cart.items,
    addItem: addItem,
    removeItem: removeItem,
  };

  console.log(cartContext);

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
