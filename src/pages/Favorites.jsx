import { useState } from "react"

export function Favorites() {
    const [filmesFavoritados, setFilmesFavoritados] = useState([])
    const data = JSON.parse(localStorage.getItem("favoritos"))
    setFilmesFavoritados(data)

    if (!data) {
        return (
            <h1>Voce não possui filmes favoritados</h1>
        )
    }
    return (
        <ul>
            {filmesFavoritados.map((id) => (<li>{id}</li>))}
        </ul>
    )
}