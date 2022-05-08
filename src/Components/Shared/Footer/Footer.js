import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineTwitter, AiFillGoogleCircle } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import logo from '../../../Images/mainLogo.png';



const Footer = () => {
    return (
        <footer className="font-small pt-4 mt-4 text-white" >
            <div className="footer-copyright text-center py-3" style={{ backgroundColor: 'darkgray' }}>
                <Container className='my-5'>
                    <Row className='d-flex justify-content-center align-items-center'>
                        <Col sm={12} md={6}>
                            <div className='d-flex justify-content-center align-items-center'>
                                <div className='w-50'>
                                    <img src={logo} alt="" />
                                    <p>
                                        Well Organized and enough safety equipments are provided for product's storage.
                                    </p>
                                    <div>
                                        <AiOutlineTwitter className='m-2'></AiOutlineTwitter>
                                        <AiFillGoogleCircle className='m-2'></AiFillGoogleCircle>
                                        <FaFacebookF className='m-2'></FaFacebookF>
                                        <RiInstagramFill className='m-2'></RiInstagramFill>
                                    </div>
                                </div>
                            </div>

                        </Col>
                        <Col sm={12} md={6}>
                            <div className='d-flex justify-content-center align-items-center'>
                                <div className='w-50'>
                                    <h2>Store Information.</h2>
                                    <p>Well Organized and enough safety equipments are provided for product's storage.</p>
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
        </footer >
    );
};

export default Footer;