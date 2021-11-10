import {useState, useEffect} from 'react';
import Hero from "./Hero"
import Movies from "./Movies"

const Content = () => {
    const [movies, setMovies] = useState([]);
    

    // get movie info from API
    useEffect(() => {
        const getMovies = async () => {
          const moviesFromServer = await fetchMovies(1)
          
          const temp = moviesFromServer.results.map(movie => {
              return {
                    id: movie.id,
                    title: movie.title,
                    poster_path: movie.poster_path,
                    overview: movie.overview,
                    release_date: movie.release_date,
                    vote_average: movie.vote_average
              }
          })
          setMovies(temp)
        }
    
        getMovies()
      }, [])

    // Fetch Movies
    const fetchMovies = async (page) => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=738d84b4c807f67e7b3e99f34f54a601&language=en-US&page=${page}`)
        const data = await res.json()

        return data
    }


    return (
        <main>
            <Hero />
            <Movies movies={movies}/>
        </main>
    )
}

export default Content
