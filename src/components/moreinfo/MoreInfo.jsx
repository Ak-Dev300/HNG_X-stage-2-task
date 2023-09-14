import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../ContextProvider";
import logo from "../../imgs/Logo.png"
import "./moreinfo.css"

const MoreInfo = () => {
    const {movieData, movies} = useContext(MovieContext)
    const navigate = useNavigate()

    const { id } = useParams()
    const movie = movieData.find((movie) => movie.id === Number(id))
    const searchMovie = movies.find((movie) => movie.id === Number(id))
    const [jointMovie, setJointMovie] = useState((movie || searchMovie) || JSON.parse(localStorage.getItem("jointmovie")))
    const [movieVideo, setMovieVideo] = useState(!localStorage.getItem("movievideo") ? "" : JSON.parse(localStorage.getItem("movievideo")))
    const [runtime, setRuntime] = useState("")

    console.log(jointMovie.id)

    useEffect(
        // function(){
        //     const timer = setTimeout( 
        //         function(){
        //             try{
                        
        //                 fetch(`https://api.themoviedb.org/3/movie/${jointMovie.id}/videos?api_key=621b22e67215b899e3ccd1c2503ecdef&language=en-US`)
        //                     .then(ref => ref.json())
        //                     .then(data => setMovieVideo(data.results[Number(Math.floor(Math.random() * data.results.length))]))
        
        //                 console.log(movieVideo)
        //             }
        //             catch(err){
        //                 alert(err)
        //             }
        //         }
        //     ,50)

        //     return clearTimeout(timer)
        // }
        function(){
                        try{
                            
                            fetch(`https://api.themoviedb.org/3/movie/${jointMovie.id}/videos?api_key=621b22e67215b899e3ccd1c2503ecdef&language=en-US`)
                                .then(ref => ref.json())
                                .then(data => setMovieVideo(data.results[Number(Math.floor(Math.random() * data.results.length))]))
            
                            console.log(movieVideo)
                        }
                        catch(err){
                            alert(err)
                        }
                    }
    ,[])
        

    useEffect(function(){
        fetch(`https://api.themoviedb.org/3/movie/${jointMovie.id}?api_key=621b22e67215b899e3ccd1c2503ecdef`)
            .then(ref => ref.json())
            .then(data => setRuntime(data.runtime))
    }, [])

    useEffect(
        function(){
            localStorage.setItem("jointmovie", JSON.stringify(jointMovie))
            return
        }
        
    ,[jointMovie])

    useEffect(
        function(){
            console.log(movieVideo)
            localStorage.setItem("movievideo", JSON.stringify(movieVideo))
            return
        }
    ,[movieVideo])

    

    // useEffect(function(){
    //     try{
    //             fetch(`https://api.themoviedb.org/3/movie/${Number(searchMovie.id)}/videos?api_key=621b22e67215b899e3ccd1c2503ecdef&language=en-US`)
    //                 .then(ref => ref.json())
    //                 .then(data => setMovieVideo(data.results[Number(Math.floor(Math.random() * data.results.length))]))
    //         }
    //         catch(err){
    //             alert(err)
    //         }
    //         finally{

    //         }
    //     }
    // ,[])

    const dateStr = jointMovie.release_date;
    const utcDate = new Date(dateStr + "T00:00:00Z");

    const utcTimestampMilliseconds = utcDate.getTime();

    // console.log(movieVideo)
    return(
        <div id="moreinfo-div">
            { !jointMovie ? <div id="no-movie">No movie found!</div> :
            <div>
                <div id="moreinfo-sidebar">
                    <img src={logo}/>
                    <ul>
                        <li onClick={() => navigate("/")}><a href=""></a>Home</li>
                        <li><a href=""></a>Movies</li>
                        <li><a href=""></a>TV Series</li>
                        <li><a href=""></a>Upcoming</li>
                        <li><a href=""></a>Log Out</li>
                    </ul>
                </div>
                <div id="moreinfo-main">
                    {/* {
                        (function(){
                            try{
                                return (<iframe
                                src={`https://www.youtube.com/embed/${movieVideo.key}`}
                                frameborder="0"
                                allowfullscreen
                                ></iframe>)
                            }catch(err){
                                alert("no video")
                            }
                        })()
                    
                    } */}
                    <iframe
                        src={`https://www.youtube.com/embed/${movieVideo.key}`}
                        frameborder="0"
                        allowfullscreen
                    >
                    </iframe>
                    <div>
                        <div id="movie-details">
                            <h3 data-testid="movie-title">{jointMovie.title} &nbsp; &middot; &nbsp; </h3>
                            <h3 data-testid="movie-release-date">{utcTimestampMilliseconds} &nbsp; &middot; &nbsp;</h3>
                            <h3 data-testid="movie-runtime" id="runtime">{runtime}</h3>
                        </div>
                        <p id="moreinfo-overview" data-testid="movie-overview">{jointMovie.overview}</p>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default MoreInfo;