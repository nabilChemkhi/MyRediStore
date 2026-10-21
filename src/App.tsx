import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import { CartProvider } from "./context/CartContext";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <BrowserRouter>
    <CartProvider>
      <Header />
      <main className="p-6 bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<p className="text-center">Page not found</p>} />
        </Routes>
      </main>
      <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;