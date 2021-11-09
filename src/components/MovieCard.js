import React, {useState, useEffect} from 'react';
import "./MovieCard.css"


const MovieCard = (props) => {
    const movie_id = props.movie_id;
    const movie = props.movie;

    const [genres, setGenres] = useState([]);
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=738d84b4c807f67e7b3e99f34f54a601`)
        .then(res => res.json())
        .then(data => {
            setPlayers(data.cast);
        })
    }, [movie_id]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=738d84b4c807f67e7b3e99f34f54a601&language=en-US`)
        .then(res => res.json())
        .then(data => {
            setGenres(data.genres);
        })
    }, [movie_id]);
    
    
    console.log(`players`, players)
    console.log(`movie`, movie)
    console.log(`genres`, genres)
    
    const img = "https://image.tmdb.org/t/p/w500/" + movie.poster_path;
    // style={{backgroundImage:`url(${img})`}} 
    

    return (
        <div style={{backgroundImage:`url(${img})`}} 
        className="MovieCard" >
            <button className="MovieCard-close-btn" onClick={props.show} >X</button>
            <div className="MovieCard-container">
                <div className="MovieCard-hero">
                    <div className="MovieCard-hero-first">
                        <p className="MovieCard-score">{movie.vote_average}</p>
                        <div className="MovieCard-img">
                            <img src={img} alt={movie.title}></img>
                        </div>
                    </div>
                    <div className="MovieCard-hero-second">
                        <div className="MovieCard-title">
                            <h2>{movie.title}</h2>
                        </div>
                        <div className="MovieCard-date">
                            <p>Release Date:{movie.release_date}</p>
                        </div>
                        <div className="MovieCard-genres">
                            <h3>Genres</h3>
                            {genres.map(genre => (
                                <span key={genre.id}>{genre.name}</span>
                            ))}
                        </div>
                        <div className="MovieCard-overview">
                            <h3>Overview</h3>
                            <p>{movie.overview}</p>
                        </div>
                    </div>
                </div>
                <div className="MovieCard-cast">
                        <h3>Cast</h3>
                        <div className="MovieCard-casts">
                            {players.filter(player => player.profile_path).map(player => (
                                <div key={player.id} className="movie-card-cast-item">
                                    <img src={`https://image.tmdb.org/t/p/w500/${player.profile_path}`} alt={player.name}/>
                                    <p>{player.name}</p>
                                </div>
                            ))}
                            
                        </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard

// return (
//     <div className="movie-card">
//         <div className="movie-card-image">
//             <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>
//         </div>
//         <div className="movie-card-info">
//             <div className="movie-card-title">
//                 <h2>{movie.title}</h2>
//             </div>
//             <div className="movie-card-genres">
//                 {genres.map(genre => (
//                     <span key={genre.id}>{genre.name}</span>
//                 ))}
//             </div>
//             <div className="movie-card-overview">
//                 <p>{movie.overview}</p>
//             </div>
//             <div className="movie-card-cast">
//                 {players.map(player => (
//                     <div key={player.id} className="movie-card-cast-item">
//                         <img src={`https://image.tmdb.org/t/p/w500/${player.profile_path}`} alt={player.name}/>
//                         <p>{player.name}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     </div>
// )