import "./navbar.css";
import { NavLink } from "react-router-dom";
import ShoppingCart from "../cart/ShoppingCart";
import { useState } from "react";

export default function Navbar({ cart, total, removeProduct }) {
  const [openCart, setOpenCart] = useState(false);
  const cartToggle = () => {
    setOpenCart(!openCart);
  };
  return (
    <header className="nav-bar">
      <div>
        <NavLink to="./">Home</NavLink>
        <NavLink to="./blog">Blog</NavLink>
        <NavLink to="./shop">Shop</NavLink>
      </div>
      <aside>
        <ShoppingCart
          cart={cart}
          total={total}
          removeProduct={removeProduct}
          cartToggle={cartToggle}
          openCart={openCart}
        />
      </aside>
    </header>
  );
}
