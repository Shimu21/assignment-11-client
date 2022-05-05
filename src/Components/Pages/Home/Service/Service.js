import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css';

const Service = (props) => {
    const { name, price, quantity, supplier, description, img } = props.service;
    return (
        <Col sm={12} md={4}>
            <Card className='shadow-sm my-3 p-3'>
                <img className='img-fluid card-img' src={img} alt="" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <div>
                        <p>Price: ${price}</p>
                        <p><small>Quantity: {quantity}</small></p>
                        <p><small>Supplier: {supplier}</small></p>
                    </div>
                    <button className='service-btn'>Go somewhere</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;