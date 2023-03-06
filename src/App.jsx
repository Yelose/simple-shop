import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";
import Error404 from "./pages/Error404";
import LandingPage from "./pages/LandingPage";
import { products } from "./data/products";
import { useState } from "react";

function App() {
  const [shoppingCart, setShoppingCart] = useState([
    { id: 1, amount: 2, name: "Product 1" },
    { id: 2, amount: 5, name: "Product 2" },
    { id: 3, amount: 7, name: "Product 3" },
  ]);
  const addProductToCart = (productId, productName) => {
    const newShoppingCart = [...shoppingCart];
  };
  return (
    <div className="App">
      <Routes>
        <Route path="simple-shop" element={<LandingPage cart={shoppingCart} />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route
            path="shop"
            element={
              <Shop products={products} addProductToCart={addProductToCart} />
            }
          ></Route>
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
