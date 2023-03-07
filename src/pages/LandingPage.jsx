import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/header/NavBar";

export default function LandingPage({ cart, total, removeProduct }) {
  return (
    <div className="landing-page">
      <Navbar cart={cart} total={total} removeProduct={removeProduct} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
