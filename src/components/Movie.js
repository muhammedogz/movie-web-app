// import { useEffect } from "react";
import "./Movie.css"

const Movie = (props) => {
    const movie = props.movie;
    console.log(props);
    return (
        <div className="Movie">
            <p className="Movie-score">Score:{movie.vote_average}</p>
            <img className="Movie-img" src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt="Movie info"></img>
            <p className="Movie-name">{movie.title}</p>
        </div>
    )
}

export default Movie
