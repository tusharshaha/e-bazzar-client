import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import bannerImg from '../../../images/shopping.png';
import './TopBanner.css'
const TopBanner = () => {
    return (
        <div className='top-banner'>
            <Container>
                <Row xs={1} md={2} className='g-5 d-flex align-items-center'>
                    <Col>
                        <div data-aos='fade-right' className='banner-text'>
                            <h1 className='fw-bold'>2022 <span className='text-danger'> New</span> Collections Here!</h1>
                            <p className='mt-4 text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus asperiores minus adipisci vero, nostrum tempore eligendi! Delectus cupiditate distinctio veritatis similique dolores soluta voluptatum esse perferendis possimus voluptates, illo ea.</p>
                        </div>
                    </Col>
                    <Col>
                        <div data-aos='fade-left' className="banner-img">
                            <img src={bannerImg} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TopBanner;