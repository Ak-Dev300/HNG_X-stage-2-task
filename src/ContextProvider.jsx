import { createContext, useState, useEffect } from "react";

export const MovieContext = createContext(null)

export const ContextProvider = (props) => {
    const [movieData, setMovieData] = useState([])

    useEffect(function(){
            try{
                fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=621b22e67215b899e3ccd1c2503ecdef&language=en-US&page=1")
                    .then(ref => ref.json())
                    .then(data => setMovieData(data.results))
            }
            catch(err){
                alert(err)
            }
            finally{

            }
        }
    ,[])

    console.log(movieData)

    const [searchMovie, setSearchMovie] = useState("")
    const [movies, setMovies] = useState([])
    const [loader, setLoader] = useState(false)

    function handleChange(value){
        setSearchMovie(value)
    }

    useEffect(
        function(){
            setLoader(true);
            const timer = setTimeout(
                function(){
                    fetch(`https://api.themoviedb.org/3/search/movie?api_key=621b22e67215b899e3ccd1c2503ecdef&query=${searchMovie}&language=en-US`)   
                            .then(ref => ref.json())
                            .then(data => setMovies(data.results))
                    
                    setLoader(false)
                }
            , 500)

            return () => clearTimeout(timer)
        } 
    ,[searchMovie])

    // console.log(movies)

    // useEffect(
    //     setTimeout(() => {
    //         fetch(`${searchMovie}`)
    //         .then(ref => ref.json())
    //         .then(data => setMovies(data))
    //     }, 5000)
    // ,[searchMovie])


    const contextValue = {movieData, searchMovie, movies, loader, handleChange}

    return(<MovieContext.Provider value={contextValue}>{props.children}</MovieContext.Provider>)
}