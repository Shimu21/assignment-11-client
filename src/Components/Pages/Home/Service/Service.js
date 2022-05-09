import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { name, price, quantity, supplier, description, img, _id } = props.service;
    const navigate = useNavigate();
    const handleInventory = (id) => {
        navigate(`/inventory/${id}`);
    }
    return (
        <Col sm={12} md={4}>
            <Card className='shadow-sm my-3 p-3' style={{ height: "550px" }}>
                <img className='img-fluid card-img' src={img} alt="" />
                <Card.Body>
                    <Card.Title style={{ fontSize: '25px' }}>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <div>
                        <p>Price: ${price}</p>
                        <p><small>Quantity: {quantity}</small></p>
                        <p><small>Supplier Name: {supplier}</small></p>
                    </div>
                    <button onClick={() => handleInventory(_id)} className='service-btn'>Stock Update</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;