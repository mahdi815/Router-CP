import React from "react";
import { Card, Button,} from "react-bootstrap";

export default function MoviesCard({
    movie: { title, description, posterUrl, trailer, rate },
}) {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={posterUrl} />
            <Card.Body>
                <Card.Title>title: {title}</Card.Title>
                <Card.Text>story: {description}</Card.Text>
                <Card.Text>trailer: {trailer}</Card.Text>
                <Card.Text>rating: {rate}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}
