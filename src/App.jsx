import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { Layout } from "./components/Layout";
import { About } from "./pages/About";
import { Favorites } from "./pages/Favorites";
import { Search } from "./pages/Search";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about/:id" element={<About />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="search" element={<Search />}></Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
