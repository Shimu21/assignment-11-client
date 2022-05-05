import React from 'react';
import './Register.css';
import { FaUserAlt, FaSignInAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';

const Register = () => {
    return (
        <div>
            <form className='shadow'>
                <div className="input_box">
                    <span><FaUserAlt /></span>
                    <input type="text" placeholder="User Name" required />
                </div>
                <div className="input_box">
                    <span><MdEmail /></span>
                    <input type="text" placeholder="Email" required />
                </div>
                <div className="input_box">
                    <span><RiLockPasswordFill /></span>
                    <input type="password" placeholder="Password" required />
                </div>
                <div className="input_box">
                    <span><RiLockPasswordFill /></span>
                    <input type="password" placeholder="Confirm Password" required />
                </div>
                <button type="submit" className='register-button'><FaSignInAlt className='me-3' />Register</button>
            </form>
        </div>
    );
};

export default Register;