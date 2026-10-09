import { useNavigate, NavLink } from "react-router-dom";
import "./NavBar.css";

export function NavBar() {
  const navigate = useNavigate()
  return (
    <nav>
      <header>CATÁLOGO DE FILMES</header>
      <div className="links">
        <button className="go-back" onClick={() => navigate(-1)}>Voltar</button>
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
