import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineTwitter, AiFillGoogleCircle } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';



const Footer = () => {
    return (
        <footer className="font-small pt-4 mt-4 text-white" >
            <div className="footer-copyright text-center py-3" style={{ backgroundColor: 'darkgray' }}>
                <Container className='my-5'>
                    <Row className='d-flex justify-content-center align-items-center'>
                        <Col sm={12} md={6}>
                            <div className='d-flex justify-content-center align-items-center'>
                                <div className='w-50'>
                                    <img src="https://htmldemo.net/kidol/kidol/assets/img/logo-light.png" alt="" />
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi architecto, cupiditate quos illum consectetur facilis.</p>
                                    <div>
                                        <AiOutlineTwitter></AiOutlineTwitter>
                                        <AiFillGoogleCircle></AiFillGoogleCircle>
                                        <FaFacebookF></FaFacebookF>
                                        <RiInstagramFill></RiInstagramFill>
                                    </div>
                                </div>
                            </div>

                        </Col>
                        <Col sm={12} md={6}>
                            <div className='d-flex justify-content-center align-items-center'>
                                <div className='w-50'>
                                    <h2>Store Information.</h2>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem modi quasi corporis, similique ad facilis.</p>
                                    <img src="https://htmldemo.net/kidol/kidol/assets/img/photos/payment1.png" alt="" />

                                </div>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className='text-center' fluid style={{ backgroundColor: "lightpink", padding: '20px 0px' }}>
                &copy; {new Date().getFullYear()} Copyright: <Link to="/">shimu21ph@gmail.com</Link>
            </Container>
        </footer>
    );
};

export default Footer;