import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useServices from '../../../Hook/useServices';
import './Inventory.css';

const Inventory = () => {
    const { id } = useParams();
    const [services, setServices] = useServices();

    return (
        <div>
            <h2>This is Inventory: {id}</h2>
        </div>
    );
};

export default Inventory;