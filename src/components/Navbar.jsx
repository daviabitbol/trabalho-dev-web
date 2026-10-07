import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { GoBackButton } from "./GoBackButton";

export function NavBar() {
  return (
    <nav>
      <header>CATÁLOGO DE FILMES</header>
      <div className="links">
        <GoBackButton />
        <div className="home">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "link-ativo" : "link")}
          >
            Home
          </NavLink>
        </div>
        <div className="favorites">
            <NavLink
          to="/favorites"
          className={({ isActive }) => (isActive ? "link-ativo" : "link")}
        >
          Favoritos
        </NavLink>
        </div>
        <div className="search">
            <NavLink
          to="/search"
          className={({ isActive }) => (isActive ? "link-ativo" : "link")}
        >
          Buscar
        </NavLink>
        </div>
      </div>
    </nav>
  );
}
