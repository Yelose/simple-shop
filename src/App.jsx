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
  const [shoppingCart, setShoppingCart] = useState([]);
  const [cartTotalProductsAmount, setCartTotalAmount] = useState(0);

  const addProductToCart = (id, name) => {
    const productExists = shoppingCart.some((p) => p.id === id);
    if (!productExists) {
      setShoppingCart([...shoppingCart, { id, name, amount: 1 }]);
      setCartTotalAmount(cartTotalProductsAmount + 1);
    } else {
      setShoppingCart(
        shoppingCart.map((product) => {
          if (product.id === id) {
            product.amount = product.amount + 1;
          }
          return product;
        })
      );
      setCartTotalAmount(cartTotalProductsAmount + 1);
    }
  };

  const removeProductFromCart = (id) => {
    const productIndex = shoppingCart.findIndex((p) => p.id === id);
    const product = shoppingCart[productIndex];

    let modifiedCart = shoppingCart;

    if (product.amount > 1) {
      modifiedCart = [
        ...shoppingCart.slice(0, productIndex),
        {
          ...product,
          amount: product.amount - 1,
        },
        ...shoppingCart.slice(productIndex + 1),
      ];
    }

    if (product.amount === 1) {
      modifiedCart = [
        ...shoppingCart.slice(0, productIndex),
        ...shoppingCart.slice(productIndex + 1),
      ];
    }

    setShoppingCart(modifiedCart);
    setCartTotalAmount(cartTotalProductsAmount - 1);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="simple-shop"
          element={
            <LandingPage
              cart={shoppingCart}
              total={cartTotalProductsAmount}
              removeProduct={removeProductFromCart}
            />
          }
        >
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
