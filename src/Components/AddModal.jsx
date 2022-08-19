import React, { useState } from "react";
import { Modal, Button, FormControl } from "react-bootstrap";

export default function AddModal({ addMovies }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newMovie, setNewMovie] = useState({
        title: "",
        description: "",
        posterUrl: "",
    });
    const handleChange = (e) => {
        setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
    };
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Movie{" "}
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Movie</Modal.Title>
                </Modal.Header>
                <FormControl
                    name="title"
                    placeholder="Search"
                    className="me-2"
                    type="text"
                    onChange={handleChange}
                    value={newMovie.title}
                />
                <FormControl
                    name="description"
                    placeholder="Search"
                    className="me-2"
                    type="text"
                    onChange={handleChange}
                    value={newMovie.description}
                />
                <FormControl
                    name="posterUrl"
                    placeholder="Search"
                    className="me-2"
                    type="text"
                    onChange={handleChange}
                    value={newMovie.posterUrl}
                />
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => addMovies(newMovie)}
                    >
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

