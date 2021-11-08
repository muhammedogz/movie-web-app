import Movie from './Movie'
import "./Movies.css"

const Movies = () => {
      
    const click = (e) => {
        if (e.target.classList.contains("Movie") || e.target.parentElement.classList.contains("Movie"))
        {
            console.log("div movie clicked");
        }
        else
        {
            console.log(`e`, e)
            console.log(`e.target`, e.target)
            console.log(`e.target.parentElement`, e.target.parentElement)
        }

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
