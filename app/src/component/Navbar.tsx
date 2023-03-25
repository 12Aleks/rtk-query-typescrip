import React from 'react';
import { Nav, Container, Navbar } from 'react-bootstrap';
import {Link} from "react-router-dom";

const NavbarPage = () => {
    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Api - RTK Query</Navbar.Brand>
                <Nav className="justify-content-end">
                    <Nav.Link ><Link to="/">Home</Link></Nav.Link>
                    <Nav.Link ><Link to="/posts">Posts</Link></Nav.Link>
                    <Nav.Link ><Link to="/comments">Comments</Link></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavbarPage;