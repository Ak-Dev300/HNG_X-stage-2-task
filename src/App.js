import "./App.css"
import { ContextProvider } from "./ContextProvider";
import Main from "./components/Main";
import MoreInfo from "./components/moreinfo/MoreInfo";
import Navbar from "./components/navBar/Navbar";
import SearchList from "./components/search-list/SearchList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState, useEffect } from "react";

const App = () => {
    return (
        <ContextProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Main />}/>
                    <Route path="/movie/:id" element={<MoreInfo />}/>
                    <Route path="/searchlist" element={<SearchList />}/> 
                </Routes>
            </Router>
        </ContextProvider>   
    )
} 

export default App;