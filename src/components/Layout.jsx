import { Link, Outlet } from "react-router-dom"
import "./Layout.css"
import { NavBar } from "./Navbar"

export function Layout() {
    return (
        <div>
            <nav className="navbar">
                <NavBar />
            </nav>
            <main>
                <Outlet />
            </main>
            <footer>footer do site</footer>
        </div>
    )
}