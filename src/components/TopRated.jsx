import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "./cards/Card";
import "./TopRated.css"
import { useContext } from "react";
import { MovieContext } from "../ContextProvider";

const TopRated = () => {
    const { movieData } = useContext(MovieContext)

    const movieLoop = movieData.slice(0,10).map((movie) => {
        return(
            <Card key={movie.id} movie={movie}/>
        )
    })


    return(
        <div>
            <div id="topRated-head">
                <h2>Top-Rated Movies</h2>
                <Link to={"/moreinfo"}>See more</Link>
            </div>
            <div id="topRated-body">
                {movieLoop}
            </div>
        </div>
    )
}

export default TopRated;
