import "./MovieCard.css"

export function MovieCard({ title, popularity, poster_path, release_date, vote_average, vote_count }) {
    return (
        <div className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="Movie poster" />
            <h3>{title}</h3>
            <p>{popularity}</p>
            <p>{release_date}</p>
            <p>{vote_average}</p>
            <p>{vote_count}</p>
        </div>
    )
}