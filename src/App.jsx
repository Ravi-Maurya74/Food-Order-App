import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/CartContext";

function App() {
  return (
    <div className=" mx-16 my-8">
      <CartContextProvider>
        <Header />
        <Meals />
      </CartContextProvider>
    </div>
  );
}

export default App;
