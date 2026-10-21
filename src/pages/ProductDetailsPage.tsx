import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import type { Product } from "../types/product";
import { useCart } from "../context/CartContext";

function ProductDetailsPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: Product = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-600">Error: {error}</p>;
  if (!product) return <p className="text-center">Product not found</p>;

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
      <Link to="/" className="text-blue-600 hover:underline">← Back to products</Link>

      <div className="grid md:grid-cols-2 gap-8 mt-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-80 w-full object-contain"
        />

        <div className="flex flex-col gap-3">
          <span className="self-start text-xs font-semibold uppercase tracking-wide
                           text-white bg-blue-500 px-2 py-0.5 rounded">
            {product.category}
          </span>
          <h1 className="text-2xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-sm text-gray-500">
            ★ {product.rating.rate} ({product.rating.count} reviews)
          </p>
          <p className="text-3xl text-green-600 font-semibold">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-gray-600">{product.description}</p>
          <button 
          onClick={() => addToCart(product)}
          className="mt-4 bg-blue-600 text-white font-semibold py-2 rounded
                             hover:bg-blue-700 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;