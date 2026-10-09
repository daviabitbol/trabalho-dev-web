import { useNavigate } from "react-router-dom";
import "./MovieCard.css";
import { useState } from "react";

export function MovieCard({
  id,
  title,
  popularity,
  poster_path,
  release_date,
  vote_average,
  vote_count,
}) {
  function getFavoritos() {
    try {
      const dados = JSON.parse(localStorage.getItem("favoritos"));
      return Array.isArray(dados) ? dados : [];
    } catch {
      return [];
    }
  }

  const navigate = useNavigate();
  const [favoritado, setFavoritado] = useState(() =>
    JSON.parse(getFavoritos().includes(id))
  );
  function handleClick(e) {
    e.stopPropagation();
    const favoritos = getFavoritos();
    const novosFavoritos = favoritos.includes(id)
      ? favoritos.filter((f) => f !== id)
      : [...favoritos, id];
    localStorage.setItem("favoritos", JSON.stringify(novosFavoritos));
    setFavoritado(novosFavoritos.includes(id));
  }
  return (
    <div className="movie-card" onClick={() => navigate(`/about/${id}`)}>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt="Movie poster"
      />
      <div className="movie-card-body">
        <h3>{title}</h3>
        <p>{popularity} views</p>
        <p>released on {release_date}</p>
        <p>avg: {vote_average}</p>
        <p>votes: {vote_count}</p>
        <button
          type="button"
          onClick={handleClick}
          className={favoritado ? "favoritado" : "desfavoritado"}
        >
          {favoritado ? "Desfavoritar" : "Favoritar"}
        </button>
      </div>
    </div>
  );
}
