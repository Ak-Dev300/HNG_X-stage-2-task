import logo from "../../imgs/Logo.png"
import menu from "../../imgs/Menu.png"
import search from "../../imgs/Search.png"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { MovieContext } from "../../ContextProvider"
import "./Navbar.css"

const Navbar = () => {
    
    const {handleChange, searchMovie} = useContext(MovieContext)
    



    return(
        <nav>
            <Link to="/"><img src={logo}/></Link>
            <div id="search-div">
                <Link to="/searchlist"><input type="text" placeholder="What do you want to watch" value={searchMovie} onChange={(e) => handleChange(e.target.value)} id="search-bar"/></Link>
                <img src={search} id="search-logo"/>
            </div>
            <img src={menu} />
        </nav>
    )
}

export default Navbar;