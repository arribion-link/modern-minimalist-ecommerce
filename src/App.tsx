import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import ProductsPage from "./pages/ProductsPage";
import ProductDetails from "./pages/ProductDetails";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<ProductsPage />}></Route>
        <Route path="/product/details/:id" element={<ProductDetails />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App
