import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import type { Product } from "./types/product";

function App() {
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
    <div>
      <Header />
      <main className="p-6 bg-gray-100 min-h-screen">
        <h2 className="text-2xl font-semibold text-center mb-6">Our Products</h2>

        {loading && <p className="text-center">Loading products...</p>}
        {error && <p className="text-center text-red-600">Error: {error}</p>}
        {!loading && !error && <ProductList products={products} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;