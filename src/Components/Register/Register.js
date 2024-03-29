import React, { useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useFirebase from '../../Hooks/useFirebase';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const location = useLocation();
    const navigate = useNavigate();
    const { registerNewUser, isLoading, error } = useFirebase()
    const handleSubmit = (e) => {
        e.preventDefault()
        registerNewUser(email, password, name, location, navigate, Swal)
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
                            <h2 className='fw-bold mb-5'>Register</h2>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor='name'>Your Name</label>
                                <input onBlur={(e) => setName(e.target.value)} type="text" name="" id="name" required />
                                <label htmlFor='email'>Your Email</label>
                                <input onBlur={(e) => setEmail(e.target.value)} type="email" name="" id="email" required />
                                <label htmlFor='password'>Password</label>
                                <input onBlur={(e) => setPassword(e.target.value)} type="password" name="" id="password" required />
                                <button type='submit' className='form-btn'>Register</button>
                            </form>
                            <Link to='/login'>Already have an account? Please login</Link>
                        </div>
                        <p className='text-center text-danger mt-5'>{error}</p>
                    </>}
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Register;