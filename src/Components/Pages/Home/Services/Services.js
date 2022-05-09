import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Services.css';
import Service from '../Service/Service';
import useServices from '../../../../Hook/useServices';

const Services = () => {
    const [services, setServices] = useServices();
    const sixServices = services.slice(0, 6);
    return (
        <div className='my-5'>
            <Container>
                <h1 className='section-title my-3'>Inventory Items</h1>
                <Row>
                    {
                        sixServices?.map(service => <Service
                            key={service._id}
                            service={service}
                        >
                        </Service>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;