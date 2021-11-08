import Movie from './Movie'
import "./Movies.css"

const Movies = () => {
    return (
        <div className="Movies container">
            <h2>Popular Movies</h2>
            <div className="Movies-all">
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
            </div>
        </div>
    )
}

export default Movies
