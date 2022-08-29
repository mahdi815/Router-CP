import React from "react";
import { Form, Button, FormControl, Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function Search({ search, setSearch }) {
    const handleSearch = (e) => {
        setSearch(e.target.value);
    };
    return (
        

        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">movie list</Navbar.Brand>
          <Nav className="me-auto">
            <Link to='/'>
                <Nav.Link href="#home">Home</Nav.Link>
            </Link>
            <Link to='/addModal'>
                <Nav.Link href="#features">addModal</Nav.Link>
            </Link>
            <Form className="form-group">
            
            <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={handleSearch}
            value={search}
        />
        <Button variant="outline-success">Search</Button>

            </Form>
          </Nav>
        </Container>
      </Navbar>

           
      
    );
}
