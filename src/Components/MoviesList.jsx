import React from "react";
import MoviesCard from "./MoviesCard";
import Rate from "./rate";
import react, { useState } from 'react';


export default function MoviesList({ moviesData, search, starRating }) {


    const filteredMovies = moviesData.filter((movie) => {
        return movie.title.toLowerCase().includes(search.toLowerCase()) && parseInt(movie.rate) <= parseInt(starRating) ;
    });
    const movieRate = moviesData.filter((movie) => {
        return movie.rate <= 3;
    });
        return (
            <>
            <div className="d-flex">
                {filteredMovies.map((movie, key) => (
                    <MoviesCard key={key} movie={movie} />
                ))}
            </div>



            </>

        );

}
    
