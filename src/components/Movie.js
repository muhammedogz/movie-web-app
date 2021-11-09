// import { useEffect } from "react";
import "./Movie.css"

const Movie = (props) => {
    const movie = props.movie;
    const img = "https://image.tmdb.org/t/p/w500/" + movie.poster_path;
    // style={{backgroundImage:`url(${img})`}} 
    return (
        <div className="Movie">
            <p className="Movie-score">{movie.vote_average}</p>
            <img className="Movie-img" src={img} alt={movie.overview}></img>
            <p className="Movie-name">{movie.title}</p>
        </div>
    )
}

export default Movie
