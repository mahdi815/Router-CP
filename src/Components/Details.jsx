import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../moviesData"


export default function Details() {
    
    let { id } = useParams();
    const findMovies = data.find((movie) =>  movie.id === parseInt({id}.id));
    return (
        <div>
            <h1>{findMovies.title}</h1>
            <p>{findMovies.description}</p>
        </div>
    )
}