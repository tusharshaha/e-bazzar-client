import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { IoLocationOutline } from 'react-icons/io5'
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'
import {GrSend} from 'react-icons/gr'
import {FaFacebookF, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa'
import "./Footer.css"
const Footer = () => {
    return (
        <div className='footer-section'>
            <div className='footer'>
                <Container className='py-5'>
                    <Row xs={1} md={2} lg={3} className='g-3'>
                        <Col>
                            <p className='logo-text logo-line'>E-Bazzar</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dignissimos a ut sequi consectetur explicabo itaque aperiam eveniet earum, cum provident, non veniam voluptatibus autem?</p>
                        </Col>
                        <Col>
                            <h4>Contact Us</h4>
                            <ul className='menu-item'>
                                <li>
                                    <IoLocationOutline className='menu-icon' /> 446, tredy Road, New york USA, MD 610293
                                </li>
                                <li>
                                    <AiOutlineMail className='menu-icon' /> example@gmail.com
                                </li>
                                <li>
                                    <AiOutlinePhone className='menu-icon' /> +0123456789
                                </li>
                            </ul>
                        </Col>
                        <Col>
                            <h4>Get In Touch</h4>
                            <form onSubmit={(e)=>e.preventDefault()} className='email-area'>
                                <input className='email-field' type="email" placeholder='Send Email' required/>
                                <button type='submit' className='email-icon'>
                                    <GrSend/>
                                </button>
                            </form>
                            <div className='icon-container'>
                                <FaFacebookF className='social-icon'/>
                                <FaTwitter className='social-icon'/>
                                <FaInstagram className='social-icon'/>
                                <FaYoutube className='social-icon'/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Footer;