import React from 'react';
import './ManageInventories.css';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../../Hook/useServices';
import ShowEachItem from '../ShowEachItem/ShowEachItem';

const ManageInventories = () => {
    const [services, setServices] = useServices();

    return (
        <Container>
            <h2>This is manage inventory page</h2>
            <Row>
                {
                    services.map(service => <ShowEachItem key={service._id} service={service}></ShowEachItem>)
                }
            </Row>
        </Container >
    );
};

export default ManageInventories;