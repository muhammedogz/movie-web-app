
const MovieCard = (props) => {
    console.log(`props`, props.movie.id)
    return (
        <div className="click" >
            <p onClick={props.show}>X</p>
        </div>
    )
}

export default MovieCard
