import React from 'react';
import './NotFound.css';
import { ImSad2 } from 'react-icons/im';

const NotFound = () => {
    return (
        <div className='d-flex justify-content-center'>
            <div>
                <h2>No Search Result</h2>
                <h1 className='text-center'> <ImSad2 className='text-danger'></ImSad2>404</h1>
            </div>
        </div>
    );
};

export default NotFound;