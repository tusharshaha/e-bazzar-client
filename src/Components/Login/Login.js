import React, { useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { Link, useNavigate,useLocation } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Swal from 'sweetalert2';
import './Login.css'
import useFirebase from '../../Hooks/useFirebase';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const location = useLocation()
    const { logIn, isLoading, error } = useFirebase()
    const handleSubmit = (e) => {
        e.preventDefault()
        logIn(email, password, location, navigate, Swal)
    }
    return (
        <>
            <Header></Header>
            <Container className='content-gap'>
                {isLoading ? <div className='d-flex align-items-center justify-content-center mt-5'>
                    <Spinner animation="border" variant="secondary" />
                </div>
                    :
                    <>
                        <div className="form-container">
                            <h2 className='fw-bold mb-5'>Login</h2>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor='email'>Your Email</label>
                                <input onBlur={(e) => setEmail(e.target.value)} type="email" name="" id="email" required />
                                <label htmlFor='password'>Password</label>
                                <input onBlur={(e) => setPassword(e.target.value)} type="password" name="" id="password" required />
                                <button type='submit' className='form-btn'>Login</button>
                            </form>
                            <Link to='/register'>New user? Please register</Link>
                        </div>
                        <p className='text-center text-danger mt-5'>{error}</p>
                    </>
                }
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Login;