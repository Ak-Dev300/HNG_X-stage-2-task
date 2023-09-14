import { useState, useEffect } from "react"
import "./highlight.css"

const Highlight = () => {

    const [highlight, setHighlight] = useState("")
    const {backdrop_path, title, overview} = highlight

    useEffect(function(){
            try{
                fetch("https://api.themoviedb.org/3/movie/popular?api_key=621b22e67215b899e3ccd1c2503ecdef&language=en-US&page=1")
                    .then(ref => ref.json())
                    .then(data => setHighlight(data.results[Number(Math.floor(Math.random() * data.results.length))]))
            }
            catch(err){
                alert(err)
            }
            finally{

            }
        }
    ,[])

    console.log(highlight)

    return(
        <div id="highlight">
            <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} id="highlight-img"/>
            <div id="highlight-div">
                <h2 id="highlight-title">{title}</h2>
                <p id="highlight-overview">{overview}</p>
                <button id="highlight-button">WATCH TRAILER</button>
            </div>
        </div>
    )
}

export default Highlight;