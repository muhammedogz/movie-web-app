import "./Movie.css"
import MoviePhoto from "../images/hero.jpg"

const Movie = () => {
    return (
        <div className="Movie">
            <p className="Movie-score">Score:5</p>
            <img className="Movie-img" src={MoviePhoto} alt="Movie info"></img>
            <p className="Movie-name">Movie Name</p>
        </div>
    )
}

export default Movie
