import { Outlet } from "react-router-dom"
import "./Layout.css"
import { NavBar } from "./Navbar"
import "./Footer"
import { Footer } from "./Footer"

export function Layout() {
    return (
        <div>
            <nav className="navbar">
                <NavBar />
            </nav>
            <main>
                <Outlet />
            </main>

                <Footer />

        </div>
    )
}