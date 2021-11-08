// import { useEffect } from "react";
import "./Movie.css"
import MoviePhoto from "../images/hero.jpg"

const Movie = (props) => {
    console.log(props);
    return (
        <div className="Movie" onClick={props.onclick}>
            <p className="Movie-score">Score:5</p>
            <img className="Movie-img" src={MoviePhoto} alt="Movie info"></img>
            <p className="Movie-name">Movie Name</p>
        </div>
    )
}

export default Movie
