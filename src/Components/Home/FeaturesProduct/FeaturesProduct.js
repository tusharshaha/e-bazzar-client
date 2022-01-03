import React from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'
import useProducts from '../../../Hooks/useProducts';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { FaEye } from 'react-icons/fa';
import './FeaturesProduct.css'
import useCart from '../../../Hooks/useCart';

const FeaturesProduct = () => {
    const { products } = useProducts()
    const { handleCart } = useCart();
    const navigate = useNavigate()
    return (
        <Container className='content-gap'>
            <h2 className='fw-bold text-center'>Our <span className='text-danger'>Features</span> Product</h2>
            {!products ?
                <div className='d-flex justify-content-center align-items-center mt-5'>
                    <Spinner animation="grow" variant="danger" />
                </div>
                :
                <Row xs={1} md={2} lg={3} className='g-3 mt-5'>
                    {
                        products?.slice(0, 6).map(product => <Col key={product._id}>
                            <div data-aos='fade-up' className='custom-card'>
                                <div className='icon-container'>
                                    <button onClick={() => handleCart(product._id)} title='Add To Cart' className="icon">
                                        <BsFillCartPlusFill />
                                    </button>
                                    <button onClick={() => navigate(`/products/${product._id}`)} title='View Details' className="icon">
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
            {
                products?.length > 6 && <div className='view-more'>
                    <Link to='/products'>View More</Link>
                </div>
            }
        </Container>
    );
};

export default FeaturesProduct;