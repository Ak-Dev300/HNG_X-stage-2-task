import "./card.css"
import { useNavigate } from "react-router-dom";

const Card = ({movie}) => {
    const navigate = useNavigate()

    return (
        <div data-testid= "movie-card" id="movieCard" onClick={() => navigate(`/movie/${movie.id}`)}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.path} data-testid="movie-poster"/>
            <p data-testid="movie-release-date">{movie.release_date}</p>
            <h3 data-testid="movie-title">{movie.title}</h3>
        </div>
    )
}

export default Card;