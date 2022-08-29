import react, { useState } from 'react';
import Rate from './rate';


const Rating = ({rating, setRating}) => {

  const handleRating = (rate) => {
    setRating(rate)
  }

  return (
    <>

      <div className="row">
        <div className="col text-center">
          <h2>films</h2>
          <h2>Rating</h2>
          <Rate rating={rating} onRating={handleRating} />
          <p>Rating - {rating}</p>
          
        </div>
      </div>
    </>
  );
};

export default Rating;
