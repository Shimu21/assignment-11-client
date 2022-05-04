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
        <Container>
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
    );
};

export default Services;