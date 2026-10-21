import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Header() {
  const { cart } = useCart();
  return (
    <header className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">Nabil's Store</Link>
      <nav className="flex gap-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <span className="font-semibold">🛒 Cart ({cart.length})</span>
      </nav>
    </header>
  );
}

export default Header;