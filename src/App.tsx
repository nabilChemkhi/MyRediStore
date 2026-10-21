import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="p-6 bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="*" element={<p className="text-center">Page not found</p>} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;