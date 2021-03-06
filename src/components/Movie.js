import  React, { useState } from "react";
import MovieCard from "./MovieCard";
import "./Movie.css"

const Movie = (props) => {

    // set initial state for every movie before clicked
    // when clicked, render movieCard component
    const [ showMovieCard, setShowMovieCard ] = useState(false);

    const handleClick = () => {
        setShowMovieCard(!showMovieCard);
    }

    const movie = props.movie;

    const img = "https://image.tmdb.org/t/p/w500/" + movie.poster_path;
    // style={{backgroundImage:`url(${img})`}} 
    return (
        <>
        {showMovieCard && <MovieCard movie={movie} movie_id={movie.id} show={handleClick} />}
        <div className="Movie" onClick={handleClick}>
            <p className="Movie-score">{movie.vote_average}</p>
            <img className="Movie-img" src={img} alt={movie.overview}></img>
            <p className="Movie-name">{movie.title}</p>
            <p className="Movie-release">{movie.release_date}</p>
        </div>
        </>
    )
}

export default Movie
