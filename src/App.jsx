import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";
import Error404 from "./pages/Error404";

function App() {
  return (
    <div className="App">
      <header className="nav-bar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/shop">Shop</NavLink>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <aside>
          <h2>Sidebar</h2>
        </aside>
      </main>
    </div>
  );
}

export default App;
