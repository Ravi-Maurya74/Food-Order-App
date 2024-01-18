import logo from "../assets/logo.jpg";

export default function Header() {
  return (
    <header className=" flex justify-between items-center mb-8">
      <div className=" flex items-center">
        <img src={logo} alt="A restaurant." className=" h-16 w-16 rounded-full border-yellow-300 border-solid border-2" />
        <h1 className=" mx-4 font-bold text-2xl">Food Shop</h1>
      </div>
      <nav>
        <button className=" bg-white text-black px-2">Cart (0)</button>
      </nav>
    </header>
  );
}
