import { NavLink, Outlet } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <header className="nav-bar">
        <NavLink to="./home">Home</NavLink>
        <NavLink to="./blog">Blog</NavLink>
        <NavLink to="./shop">Shop</NavLink>
      </header>
      <main>
        <Outlet />
        <aside>
          <h2>Sidebar</h2>
        </aside>
      </main>
    </div>
  );
}
