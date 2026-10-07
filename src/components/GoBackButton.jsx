import { useNavigate } from "react-router-dom"
import "./GoBackButton.css"

export function GoBackButton() {
    const navigate = useNavigate()
    return (
        <button className="go-back" onClick={() => navigate(-1)}>Voltar</button>
    )
}