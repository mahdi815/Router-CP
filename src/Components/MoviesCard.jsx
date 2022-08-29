import React from "react";
import { Card } from "react-bootstrap";
import AddFavourites from "./addFavourites";
import Details from "./Details";


export default function MoviesCard(props) {
   
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={props.movie.posterUrl} />
            <div>
            <AddFavourites  movie={props.movie }/>
            </div>
            <Card.Body>
                <Card.Title>title: {props.movie.title}</Card.Title>
                <Card.Text>rating: {props.movie.rate}</Card.Text>
                

                
          

            </Card.Body>
        </Card>
    );
}
