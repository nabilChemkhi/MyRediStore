import type { Product } from "../types/product";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
    const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div className="p-4 bg-white shadow-md rounded-lg border-t-4 border-blue-500
                    hover:shadow-xl hover:-translate-y-1 transition duration-200
                    flex flex-col">
                        <button
        onClick={() => setIsFavorite(!isFavorite)}
        className="absolute top-3 right-3 text-2xl"
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        {isFavorite ? "❤️" : "🤍"}
      </button>
      <span className="self-start text-xs font-semibold uppercase tracking-wide
                       text-white bg-blue-500 px-2 py-0.5 rounded">
        {product.category}
      </span>

      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-contain my-4"
      />

      <h3 className="text-lg font-bold text-gray-800 line-clamp-2">
        {product.title}
      </h3>

      <p className="text-green-600 font-semibold mt-2">
        ${product.price.toFixed(2)}
      </p>

      <button className="mt-auto pt-2 w-full bg-blue-600 text-white text-sm font-semibold
                         py-2 rounded hover:bg-blue-700 transition-colors">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;