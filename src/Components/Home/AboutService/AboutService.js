import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './AboutService.css'
const AboutService = () => {
    const services = [
        {id:1, title:'Free Shipping', style:{backgroundColor:'#befabe', padding: '15px 25px', borderRadius: '5px', height:'100%'}},
        {id:2, title:'14 Days Easy Return', style:{backgroundColor:'#ffbfa6', padding: '15px 25px', borderRadius:'5px', height:'100%'}},
        {id:3, title:'24/7 Customer Support', style:{backgroundColor:'#d6eef7', padding: '15px 25px', borderRadius:'5px', height:'100%'}}
    ]
    return (
        <Container className='content-gap'>
            <Row xs={1} sm={2} md={3} className="g-4">
                {
                    services.map(service=><Col key={service.id}>
                        <div style={service.style}>
                            <h3>{service.title}</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos aliquam optio iusto.</p>
                        </div>
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default AboutService;