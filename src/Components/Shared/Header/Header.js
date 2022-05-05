import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar className='nabvar-bg' collapseOnSelect>
            <Container>
                <Navbar.Brand href="#home">
                    <img className='img-fluid' src="https://htmldemo.net/kidol/kidol/assets/img/logo.png" alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link className='link-style' as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className='link-style' as={Link} to="/about">About</Nav.Link>
                        <Nav.Link className='link-style' as={Link} to="/blogs">Blogs</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className='link-style login-button' as={Link} to="/login">Sign In</Nav.Link>
                        <Nav.Link className='link-style login-button' as={Link} to="/register">Sign Out</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;