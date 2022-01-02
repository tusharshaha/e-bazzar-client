import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {FaShoppingCart} from 'react-icons/fa'
import './Header.css'
const Header = () => {
    return (
        <Navbar bg='light' fixed='top' expand="lg" variant="light">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Brand>E-Bazzar</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto text-center">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <Navbar.Text>
                            <div className='cart-container'>
                                <FaShoppingCart className='cart-icon'/>
                                <span className='cart-total'>0</span>
                            </div>
                        </Navbar.Text>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;