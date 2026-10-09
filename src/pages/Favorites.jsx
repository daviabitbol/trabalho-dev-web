import { useEffect, useState } from "react";
import { MovieCard } from "./../components/MovieCard";
import "./Favorites.css";

export function Favorites() {
  const [filmesFavoritados, setFilmesFavoritados] = useState([]);

  function getFavoritos() {
    try {
      const dados = JSON.parse(localStorage.getItem("favoritos"));
      return Array.isArray(dados) ? dados : [];
    } catch {
      return [];
    }
  }

  useEffect(() => {
    const ids = getFavoritos();

    ids.forEach((id) => {
      fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=pt-BR`,
      )
        .then((res) => res.json())
        .then((data) =>
          setFilmesFavoritados((prev) =>
            prev.some((f) => f.id === data.id) ? prev : [...prev, data],
          ),
        );
    });
  }, []);

  if (filmesFavoritados.length === 0) return <p className="empty">Você ainda não favoritou nenhum filme</p>

  return (
    <div className="grid">
      {filmesFavoritados.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          popularity={movie.popularity}
          poster_path={movie.poster_path}
          release_date={movie.release_date}
          vote_average={movie.vote_average}
          vote_count={movie.vote_count}
        />
      ))}
    </div>
  );
}
