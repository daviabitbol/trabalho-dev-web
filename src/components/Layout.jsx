import { Outlet } from "react-router-dom";
import { NavBar } from "./Navbar";
import { Footer } from "./Footer";
import "./Layout.css"

export function Layout() {
  return (
    <div className="layout">
      <nav className="navbar">
        <NavBar />
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
