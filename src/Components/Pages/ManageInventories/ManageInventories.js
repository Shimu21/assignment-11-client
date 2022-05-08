import React from 'react';
import './ManageInventories.css';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../../Hook/useServices';
import ShowEachItem from '../ShowEachItem/ShowEachItem';
import { useNavigate } from 'react-router-dom';

const ManageInventories = () => {
    const navigate = useNavigate();
    const [services] = useServices();

    return (
        <Container>
            <div className='d-flex justify-content-center my-2'>
                <div>
                    <h2 className='mb-2'>Manage inventory page</h2>
                    <button onClick={() => navigate('/addItem')} className='item-button'>Add a item</button>
                </div>
            </div>
            <Row>
                {
                    services.map(service => <ShowEachItem key={service._id} service={service}></ShowEachItem>)
                }
            </Row>
        </Container >
    );
};

export default ManageInventories;