import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetails.css";

export function MovieDetails() {
  const { id } = useParams();
  const [filme, setFilme] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=pt-BR`,
    )
      .then((res) => res.json())
      .then((data) => setFilme(data));
  }, [id]);

  if (!filme) return <h1>Carregando...</h1>;
  return (
    <div className="alignement-div">
      <div className="movie-details-card">
        <img
          src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
          alt="Movie poster"
        />
        <div className="info">
          <h3>{filme.title}</h3>
          <p>Overview</p>
          {filme.overview ? <p>{filme.overview}</p> : <p>Esse filme não possui overview</p>}
          <p>{filme.popularity} visualizações</p>
          <p>lançado em {filme.release_date}</p>
          <p>média: {filme.vote_average}</p>
          <p>votos: {filme.vote_count}</p>
        </div>
      </div>
    </div>
  );
}
