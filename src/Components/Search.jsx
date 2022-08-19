import React from "react";
import { Form, Button, FormControl } from "react-bootstrap";

export default function Search({ search, setSearch }) {
    const handleSearch = (e) => {
        setSearch(e.target.value);
    };
    return (
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
    );
}
