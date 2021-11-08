import Movie from './Movie'
import "./Movies.css"

const Movies = () => {
    const saySomething = (something) => {
        console.log(something);
      };
      
      const click = (e) => {
          console.log(`e:`, e)
        saySomething("element clicked");
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
