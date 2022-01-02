import React from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import {BsFillCartPlusFill} from 'react-icons/bs';
import {FaEye} from 'react-icons/fa';
import useProducts from '../../Hooks/useProducts';
import { addCart } from '../../LocalStorage/localStorage';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const AllProducts = () => {
    const { products } = useProducts()
    
    return (
        <>
            <Header></Header>
            <Container className='content-gap'>
                <h2 className='fw-bold text-center'>Our <span className='text-danger'>Available</span> Products</h2>
                {!products ?
                    <div className='d-flex justify-content-center align-items-center mt-5'>
                        <Spinner animation="grow" variant="danger" />
                    </div>
                    :
                    <Row xs={1} md={2} lg={3} className='g-3 mt-5'>
                        {
                            products?.map(product => <Col key={product._id}>
                                <div data-aos='fade-up' className='custom-card'>
                                    <div className='icon-container'>
                                        <button onClick={()=>addCart(product._id)} title='Add To Cart' className="icon">
                                            <BsFillCartPlusFill />
                                        </button>
                                        <button title='View Details' className="icon">
                                            <FaEye />
                                        </button>
                                    </div>
                                    <div className='card-img'>
                                        <img src={product.img} alt="" />
                                    </div>
                                    <h4 className='my-3'>{product.name}</h4>
                                    <h5 className='fw-bold text-danger'>&#36;{product.price}</h5>
                                </div>
                            </Col>)
                        }
                    </Row>
                }
            </Container>
            <Footer></Footer>
        </>
    );
};

export default AllProducts;