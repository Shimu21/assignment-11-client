import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase/firebase.init';
import useService from '../../../Hook/useService';
import './Inventory.css';

const Inventory = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const email = user
    const numberRef = useRef();
    const { id } = useParams();
    const [service, setService] = useService(id)
    const { name, img, supplier, price, quantity, description } = service;

    const newQuantity = {
        name: name,
        price: price,
        quantity: quantity - 1,
        supplier: supplier,
        img: img,
        description: description,
        email: email
    };


    const handleDeliver = async (newQuantity) => {
        const url = `https://blooming-mountain-38206.herokuapp.com/services/${id}`;
        await fetch(url, {
            method: "PUT",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(newQuantity)
        })
            .then(res => res.json())
            .then(data => {
                setService(newQuantity)
                toast('One item deliver');
            });
    }

    const handleRestock = async (e) => {
        e.preventDefault();
        const restock = parseInt(numberRef.current.value);
        const newQuantity = {
            name: name,
            price: price,
            quantity: quantity + restock,
            supplier: supplier,
            img: img,
            email: email
        };

        const url = `https://blooming-mountain-38206.herokuapp.com/services/${id}`;
        await fetch(url, {
            method: "PUT",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(newQuantity)
        })
            .then(res => res.json())
            .then(data => {
                setService(newQuantity)
                toast('item quantity add');
            });
    }
    return (
        <div style={{ height: '70vh' }}>
            <Container>
                <Row className='shadow-sm p-4 inventory-style my-5 rounded'>
                    <Col sm={12} md={3}>
                        <img className='img-fluid' src={img} alt="" />
                    </Col>
                    <Col sm={12} md={6}>
                        <div>
                            <h3>Name: {name}</h3>
                            <h4>Price:{price}</h4>
                            <h4>Quantity:{quantity}</h4>
                            <h4>Supplier:{supplier}</h4>
                        </div>
                    </Col>
                    <Col sm={12} md={3}>
                        <div>
                            <button onClick={() => handleDeliver(newQuantity)} className='inventory-button'>Deliver</button>
                            <form onSubmit={handleRestock}>
                                <input ref={numberRef} className='mt-4 mb-2 input-bg' type="number" name="number" id="" required />
                                <br />
                                <input className='inventory-button' type="submit" value="Restock" />
                            </form>
                        </div>
                    </Col>
                </Row>
                <div className='d-flex justify-content-center'>
                    <button className='item-button' onClick={() => navigate('/manageItems')}>Manage Inventory</button>
                </div>
            </Container>
        </div>
    );
};

export default Inventory;