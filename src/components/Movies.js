import Movie from './Movie'
import "./Movies.css"

const Movies = ( movies ) => {
    movies = movies.movies;

    return (
        <div className="Movies container">
            <h2>Popular Movies</h2>
            <div className="Movies-all">
                {movies.map(movie => (
                    <Movie key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    )
}

export default Movies
