import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import './Services.css';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('toys.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-5'>
            <Container>
                <h1 className='section-title my-3'>Our Services</h1>
                <Row>
                    {
                        services?.map(service => <Service
                            key={service.id}
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