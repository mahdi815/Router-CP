import React from "react";
import MoviesCard from "./MoviesCard";
import { useState } from "react";
import StarRating from "./StarRating";
export default function MoviesList({ moviesData, search }) {
    const filteredMovies = moviesData.filter((movie) => {
        return movie.title.toLowerCase().includes(search.toLowerCase());
    });
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

       
        return (
            <>
            <div>
            <div className="star-rating">
            {[...Array(5)].map((star, index) => {
              index += 1;
              console.log(StarRating);

              return (
                <button
                  type="button"
                  key={index}
                  className={index <= (hover || rating) ? "on" : "off"}
                  onClick={() => {
                    setRating(index);}}
                  onMouseEnter={() =>  setHover(index)}
                  onMouseLeave={() => setHover(rating)}
                >
                  <span className="star">&#9733;</span>
                </button>
              );
            })}
          </div>
            </div>
            <div className="d-flex">
                {filteredMovies.map((movie, key) => (
                    <MoviesCard key={key} movie={movie} />
                ))}
    
            </div>
            </>
        );

}
    
