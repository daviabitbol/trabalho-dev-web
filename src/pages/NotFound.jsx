import { Link } from "react-router-dom"
import "./NotFound.css"

export function NotFound() {
    return (
        <div className="NotFound">
            <div>
                <h1 className="erro">404</h1>
                <h3>Pagina não encontrada</h3>
                <h4>Deseja <Link to="/">voltar ao início?</Link></h4>
            </div>
        </div>
    )
}