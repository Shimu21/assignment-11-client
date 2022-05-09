import React from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import './ContactUs.css';
import contactImg from '../../../../Images/contactUs.png';

const ContactUs = () => {
    return (
        <div className='p-5'>
            <Container>
                <h1 className='text-center my-4'>Connect with us !!!</h1>
                <Row>
                    <Col sm={12} md={6}>
                        <div>
                            <img className='img-fluid w-100' src={contactImg} alt="" />
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Your name</Form.Label>
                                <Form.Control type="text" placeholder="Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter Email" />
                            </Form.Group>

                            <FloatingLabel controlId="floatingTextarea" label="Comments" className="mb-3">
                                <Form.Control as="textarea" placeholder="Leave a comment here" />
                            </FloatingLabel>
                            <button className='contact-btn' type="submit">
                                Submit
                            </button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContactUs;