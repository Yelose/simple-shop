import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";
import Error404 from "./pages/Error404";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="simple-shop" element={<LandingPage />}>
            <Route index path="home" element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="shop" element={<Shop />} />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
