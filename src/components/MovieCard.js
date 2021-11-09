import React, {useState, useEffect} from 'react';
import "./MovieCard.css"


const MovieCard = (props) => {
    const movie_id = props.movie_id;
    const movie = props.movie;

    const [genres, setGenres] = useState([]);
    

    useEffect(() => {
        const getGenres = async () => {
          const movieFromServer = await fetchMovie(movie_id);
          setGenres(movieFromServer.genres)
        }
    
        getGenres()
    }, [movie_id])

    // Fetch Movie for get Genres
    const fetchMovie = async (id) => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=738d84b4c807f67e7b3e99f34f54a601&language=en-US`)
        const data = await res.json()

        return data
    }

    console.log(`movie`, movie)
    console.log(`genres`, genres)

    const img = "https://image.tmdb.org/t/p/w500/" + movie.poster_path;
    // style={{backgroundImage:`url(${img})`}} 

    return (
        <div style={{backgroundImage:`url(${img})`}} 
        className="MovieCard" >
            <p onClick={props.show}>X</p>
            <div>
                <p className="Movie-score">{movie.vote_average}</p>
                <img className="Movie-img" src={img} alt={movie.overview}></img>
                <p className="Movie-name">{movie.title}</p>
            </div>
        </div>
    )
}

export default MovieCard
