import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-bg'>
            <Container>
                <Row className='d-flex justify-content-center align-items-center'>
                    <Col sm={12} md={6}>
                        <div className='banner-text'>
                            <h1>Kids Toy Storage Solution</h1>
                            <h5>We ensure your product's safety</h5>
                        </div>
                        <button className='banner-button'>
                            More Info
                        </button>
                    </Col>
                    <Col sm={12} md={6}>
                        <img src="https://htmldemo.net/kidol/kidol/assets/img/slider/2.png" alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;