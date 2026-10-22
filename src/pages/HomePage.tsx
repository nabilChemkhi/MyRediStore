import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import type { Product } from "../types/product";

function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

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

  const categories = [...new Set(products.map((product) => product.category))];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <h2 className="text-2xl font-semibold text-center mb-6">Our Products</h2>
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 p-2 rounded border border-gray-300 bg-white"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 rounded border border-gray-300 bg-white"
        >
          <option value="">All categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {loading && <p className="text-center">Loading products...</p>}
      {error && <p className="text-center text-red-600">Error: {error}</p>}
      
      {/* {!loading && !error && <ProductList products={products} />} */}
      {/* {!loading && !error && <ProductList products={filteredProducts} />} */}
      {!loading && !error && (
        <>
          <p className="text-center text-sm text-gray-500 mb-4">
            {filteredProducts.length} of {products.length} products
          </p>

          {filteredProducts.length === 0 ? (
            <p className="text-center text-gray-600">
              No products found. Try another search or category.
            </p>
          ) : (
            <ProductList products={filteredProducts} />
          )}
        </>
      )}
    </>
  );
}

export default HomePage;