import React, { useState } from "react";
import AddModal from "./Components/AddModal";
import MoviesList from "./Components/MoviesList";
import Search from "./Components/Search";
import { data } from "./moviesData";
import StarRating from "./Components/StarRating";

export default function App() {
    const [moviesData, setMoviesData] = useState(data);
    const [search, setSearch] = useState("");
    const addMovies = (newMovies) => {
        setMoviesData([...moviesData, { ...newMovies, id: Math.random() }]);
        sessionStorage.setItem(
            "moviesData",
            JSON.stringify([...moviesData, { ...newMovies, id: Math.random() }])
        );
    };
    return (

            <div>
          
            <Search search={search} setSearch={setSearch} />
            <div className="App">
            <StarRating />
            </div>
            <MoviesList moviesData={moviesData} search={search} />
            <AddModal addMovies={addMovies} />
      
         </div>
    );
}
