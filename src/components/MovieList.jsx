import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import "./MovieList.css";

export function MovieList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
        );
        const data = await res.json();
        setMovies(data.results);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, []);

  return (
    <div>
      <ul className="grid">
        {movies.map((movie) => (
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
      </ul>
    </div>
  );
}
