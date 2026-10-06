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
  const navigate = useNavigate()
  const [favoritado, setFavoritado] = useState(false)
  function handleClick(e) {
    e.stopPropagation()
    setFavoritado(!favoritado)
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
        <button onClick={handleClick} className={favoritado ? "favoritado" : "desfavoritado"}>{favoritado ? "Desfavoritar" : "Favoritar"}</button>
      </div>
    </div>
  );
}
