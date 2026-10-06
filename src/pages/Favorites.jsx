import { useState } from "react"

export function Favorites() {
    const [filmesFavoritados, setFilmesFavoritados] = useState({})
    const dados = JSON.parse(localStorage.getItem())
    console.log(dados)
    return (
        <div>
          <h1>filmes favoritados</h1>
        </div>
    )
}