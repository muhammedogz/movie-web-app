import  React, { useState } from "react";
import "./Movie.css"

const Movie = (props) => {
    const [ movieCard, setMovieCard ] = useState(false);

    const handleClick = () => {
        setMovieCard(!movieCard);
    }
    
    console.log(`movieCard`, movieCard)

    const movie = props.movie;
    const img = "https://image.tmdb.org/t/p/w500/" + movie.poster_path;
    // style={{backgroundImage:`url(${img})`}} 
    return (
        <div className="Movie" onClick={handleClick}>
            <p className="Movie-score">{movie.vote_average}</p>
            <img className="Movie-img" src={img} alt={movie.overview}></img>
            <p className="Movie-name">{movie.title}</p>
        </div>
    )
}

export default Movie
