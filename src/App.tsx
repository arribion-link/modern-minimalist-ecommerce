import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import ProductsPage from "./pages/ProductsPage";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<ProductsPage />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App
