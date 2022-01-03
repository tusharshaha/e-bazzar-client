import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container,Row,Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useCart from '../../../Hooks/useCart';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './ProductDetails.css'
const ProductDetails = () => {
    const [product, setProduct] = useState({})
    const {id} = useParams();
    const {handleCart} = useCart();
    useEffect(()=>{
        axios.get(`https://secure-spire-40678.herokuapp.com/products/${id}`)
        .then(res => setProduct(res.data))
    },[id])
    return (
        <>
            <Header></Header>
            <Container className='content-gap'>
                <Row className='g-5 d-flex align-items-center'>
                    <Col data-aos='fade-right' xs={12} md={5}>
                        <div className='product-img'>
                            <img src={product.img} alt="" />
                        </div>
                    </Col>
                    <Col data-aos='fade-left' xs={12} md={7}>
                            <h3 className='fw-bold mb-4'>{product.name}</h3>
                            <h4 className='fw-bold text-danger'> &#36; {product.price}</h4>
                        <div className='product-details'>
                            <p>{product.des1}</p>
                            <p>{product.des2}</p>
                            <p>{product.des4}</p>
                            <p>{product.des5}</p>
                            <p>{product.des6}</p>
                            <p>{product.des7}</p>
                            <p>{product.des8}</p>
                            <p>Brand: {product.Brands}</p>
                        </div>
                        <Button onClick={()=>handleCart(id)}>Add To Cart</Button>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default ProductDetails;