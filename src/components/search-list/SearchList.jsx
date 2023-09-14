import Card from "../cards/Card"
import { MovieContext } from "../../ContextProvider";
import { useContext } from "react";
import { ClipLoader } from "react-spinners";
import "./searchlist.css"

const SearchList = () => {
    const { movies, loader } = useContext(MovieContext)

    const loopMovies = movies.map((movie) => {
        return(
            <Card key={movie.id} movie={movie}/> 
        )
    })

    const override = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    return(
        <div id="searchlist">
            {loader? <div id="loader"><ClipLoader color={'#fff'} cssOverride={override} size={70} /></div>:loopMovies}
        </div>
    )
}

export default SearchList;