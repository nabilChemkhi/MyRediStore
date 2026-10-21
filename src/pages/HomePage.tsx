import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import type { Product } from "../types/product";

function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: Product[] = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <>
      <h2 className="text-2xl font-semibold text-center mb-6">Our Products</h2>
      {loading && <p className="text-center">Loading products...</p>}
      {error && <p className="text-center text-red-600">Error: {error}</p>}
      {!loading && !error && <ProductList products={products} />}
    </>
  );
}

export default HomePage;