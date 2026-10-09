import { useState } from "react";
import "./SearchForm.css";
import { MovieCard } from "./MovieCard";
export function SearchForm() {
  const [form, setForm] = useState({ title: "" });
  const [loading, setLoading] = useState(false);
  const [erros, setErros] = useState({});
  const [movies, setMovies] = useState([]);
  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (erros[name]) setErros({ ...erros, [name]: undefined });
  }
  function validar() {
    const e = {};
    if (!form.title.trim()) e.title = "O titulo não pode estar vazio";
    return e;
  }
  function handleSubmit(ev) {
    ev.preventDefault();
    const e = validar();
    setErros(e);
    fetchMovies();
  }

  async function fetchMovies() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(form.title)}&api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=pt-BR`,
      );
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <h1>Carregando...</h1>;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Titulo:</label>
        {erros.title && <span className="error-msg">{erros.title}</span>}
        <input
          placeholder="Ex: Resident Evil..."
          name="title"
          value={form.title}
          onChange={handleChange}
        />
        <button type="submit" className="submit-btn">
          Buscar
        </button>
      </form>
      <div className="grid">
        {movies.length ? (
          movies.map((movie) => (
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
          ))
        ) : (
          <p className="not-found">Não foi possível encontrar um filme que possua esse título</p>
        )}
      </div>
    </div>
  );
}
