import Movie from './Movie'
import "./Movies.css"

const Movies = () => {
      
    const click = (e) => {
        let target = null;
        if (e.target.classList.contains("Movie"))
            target = e.target;
        else if ( e.target.parentElement.classList.contains("Movie"))
            target = e.target.parentElement;

        console.log(target);
        if (!target.classList.contains("click"))
            target.classList.add("click");
        else
            target.classList.remove("click");
    };

    return (
        <div className="Movies container">
            <h2>Popular Movies</h2>
            <div className="Movies-all">
                <Movie onclick={click}  />
                <Movie onclick={click}  />
                <Movie onclick={click}  />
                <Movie onclick={click}  />
                <Movie onclick={click}  />
                <Movie onclick={click}  />
                <Movie onclick={click}  />
                <Movie onclick={click}  />
                <Movie onclick={click}  />

            </div>
        </div>
    )
}

export default Movies
