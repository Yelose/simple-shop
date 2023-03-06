import { NavLink, Outlet } from "react-router-dom";
import ShoppingCart from "../components/cart/ShoppingCart";

export default function LandingPage({ cart }) {
  return (
    <div className="landing-page">
      <header className="nav-bar">
        <NavLink to="./">Home</NavLink>
        <NavLink to="./blog">Blog</NavLink>
        <NavLink to="./shop">Shop</NavLink>
      </header>
      <main>
        <Outlet />
        <aside>
          <ShoppingCart cart={cart} />
        </aside>
      </main>
    </div>
  );
}
