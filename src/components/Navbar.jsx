import { NavLink } from "react-router-dom"
import "./NavBar.css"

export function NavBar() {
    return (
        <nav>
            <NavLink to="/" className={({ isActive }) => isActive ? "link-ativo" : "link"}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "link-ativo" : "link"}>Sobre</NavLink>
            <NavLink to="/favorites" className={({ isActive }) => isActive ? "link-ativo" : "link"}>Favoritos</NavLink>
            <NavLink to="/search" className={({ isActive }) => isActive ? "link-ativo" : "link"}>Buscar</NavLink>
        </nav>
    )
}