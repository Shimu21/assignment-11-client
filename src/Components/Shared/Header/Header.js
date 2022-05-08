import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import { Link } from 'react-router-dom';
import auth from '../../../firebase/firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import logo from '../../../Images/mainLogo.png';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <Navbar className='nabvar-bg' collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img className='img-fluid' src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link className='link-style' as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className='link-style' as={Link} to="/about">About</Nav.Link>
                        <Nav.Link className='link-style' as={Link} to="/blogs">Blogs</Nav.Link>
                        {
                            user && <>
                                <Nav.Link className='link-style' as={Link} to="/manageItems">Manage Items</Nav.Link>
                                <Nav.Link className='link-style' as={Link} to="/addItem">Add Item</Nav.Link>
                                <Nav.Link className='link-style' as={Link} to="/myItem">My Item</Nav.Link>
                            </>
                        }
                    </Nav>
                    <Nav>
                        {
                            user ?
                                <Nav.Link className='link-style login-button' as={Link} to="" onClick={() => signOut(auth)}>Sign Out</Nav.Link>
                                :
                                <Nav.Link className='link-style login-button' as={Link} to="/login">Sign In</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;