import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './Service.css';

const Service = (props) => {
    const { name, price, quantity, supplier, description, img } = props.service;
    return (
        <Col sm={12} md={4}>
            <Card className='shadow-sm'>
                <Card.Img variant="top" className='card-img' src={img} />
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
                    <Button>Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;