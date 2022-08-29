import React, { useState } from "react";
import AddModal from "./Components/AddModal";
import MoviesList from "./Components/MoviesList";
import Search from "./Components/Search";
import { data } from "./moviesData";
import StarRating from "./Components/StarRating";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Details from "./Components/Details"



export default function App() {
    const [moviesData, setMoviesData] = useState(data);
    const [search, setSearch] = useState("");
    const [rating, setRating] = useState(5);
    const handleRating = (rate) => {
        console.log(rate)
        setRating(rate)
    };
    const addMovies = (newMovies) => {
        setMoviesData([...moviesData, { ...newMovies, id: Math.random() }]);
        sessionStorage.setItem(
            "moviesData",
            JSON.stringify([...moviesData, { ...newMovies, id: Math.random() }])
        );
    };
    




    return (

        <>
        <Router>
        <Search search={search} setSearch={setSearch} />
        <StarRating rate={rating} setRating={handleRating} />

            
            <Routes>
                <Route exact path ='/' element={<MoviesList moviesData={moviesData} search={search} starRating={rating}/>}/>
                <Route  path ='*' element={<p>not found</p>}/>
                <Route path = '/addModal' element={ <AddModal addMovies={addMovies} />  }/>
                <Route path="/details/:id" element={<Details/>} />

            </Routes>
        </Router>
        </>
    );
}
