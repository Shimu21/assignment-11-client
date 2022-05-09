import React from 'react';
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useServices from '../../../Hook/useServices';
import './ShowEachItem.css';

const ShowEachItem = ({ service }) => {
    const { _id, name, price, quantity, supplier, img, email } = service;
    const [services, setServices] = useServices();
    const navigate = useNavigate();

    const deleteSingleItem = async (id) => {

        const proceed = window.confirm("Are you sure?");
        if (proceed) {
            const url = `https://blooming-mountain-38206.herokuapp.com/services/${id}`;
            await fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = services.filter(ser => ser._id !== id);
                    setServices(remaining);
                });
        }
    };

    return (
        <Col sm={12} md={3} className='d-flex'>
            <div className="card my-3">
                <div className="card-body">
                    <img className='img-fluid' src={img} alt="" />
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"></p>
                    <div className="card">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Price: {price}</li>
                            <li className="list-group-item">Supplier: {supplier}</li>
                            <li className="list-group-item">Email: {email}</li>
                            <li className="list-group-item">Quantity: {quantity}</li>
                        </ul>
                    </div>
                    <button className='item-button' onClick={() => navigate(`/updateItem/${_id}`)}>Update</button>
                    <button className='item-button' onClick={() => deleteSingleItem(_id)}>Delete</button>
                </div>
            </div>
        </Col >
    );
};

export default ShowEachItem;