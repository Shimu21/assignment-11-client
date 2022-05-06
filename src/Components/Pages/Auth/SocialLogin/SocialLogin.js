import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <hr />
            <button className='btn btn-danger py-2 w-50'><FcGoogle className='me-3' />Google Login</button>
        </div>
    );
};

export default SocialLogin;