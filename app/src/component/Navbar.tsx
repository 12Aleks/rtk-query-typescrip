import React from 'react';
import { Nav, Container, Navbar } from 'react-bootstrap';
import {Link} from "react-router-dom";

const NavbarPage = () => {
    return (
        <Navbar expand="lg" style={{background: '#a5da0c'}}>
            <Container>
                <Navbar.Brand href="#home" style={{color: 'white'}}>Api - RTK Query</Navbar.Brand>
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