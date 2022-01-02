import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useProducts from '../../../Hooks/useProducts';
import './FeaturesProduct.css'
const FeaturesProduct = () => {
    const {products} = useProducts()
    return (
        <Container className='content-gap'>
            <h2 className='fw-bold text-uppercase text-center'>Our <span className='text-danger'>Features</span> Product</h2>
            <Row xs={1} md={2} lg={3}>

            </Row>
        </Container>
    );
};

export default FeaturesProduct;