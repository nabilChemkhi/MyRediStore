import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function CartPage() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0) {
    return (
      <div className="text-center">
        <p className="mb-4">Your cart is empty.</p>
        <Link to="/" className="text-blue-600 hover:underline">← Continue shopping</Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>

      <ul className="divide-y">
        {cart.map((item, index) => (
          <li key={`${item.id}-${index}`} className="flex items-center gap-4 py-3">
            <img src={item.image} alt={item.title} className="h-16 w-16 object-contain" />
            <span className="flex-1 line-clamp-1">{item.title}</span>
            <span className="text-green-600 font-semibold">${item.price.toFixed(2)}</span>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-600 hover:underline text-sm"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <p className="text-right text-xl font-bold mt-4">
        Total: ${total.toFixed(2)}
      </p>
    </div>
  );
}

export default CartPage;