import React from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'
import useCart from '../../../Hooks/useCart'
import './Header.css'
import useFirebase from '../../../Hooks/useFirebase';
const Header = () => {
    const { cartNum } = useCart();
    const { user,logOut } = useFirebase();
    return (
        <Navbar bg='light' fixed='top' expand="lg" variant="light">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Brand className='logo-text'>E-Bazzar</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto text-center">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        {user?.email ?
                            <>
                                <button onClick={logOut} className='logout-btn mx-auto' size='sm'>LogOut</button>
                                <Navbar.Text className='text-capitalize text-dark fw-bold ms-2'>
                                    {user?.displayName}
                                </Navbar.Text>
                            </>
                            :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                        <Navbar.Text>
                            <div className='cart-container'>
                                <Link to='/cart'>
                                    <FaShoppingCart className='cart-icon' />
                                </Link>
                                <span className='cart-total'>{cartNum}</span>
                            </div>
                        </Navbar.Text>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;