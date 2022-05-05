import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';


const Register = () => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleLoinSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(email, password);
    };

    return (
        <div className='form-container'>
            <div className='input-container shadow-sm'>
                <div className='p-5'>
                    <h2 className='form-title'>Login</h2>

                    <form className='p-3' onSubmit={handleLoinSubmit}>
                        <div className='input-group'>
                            <label htmlFor="email">Email</label>
                            <input ref={emailRef} type="email" name='email' placeholder='Enter your email' required />
                        </div>

                        <div className='input-group'>
                            <label htmlFor="password">Password</label>
                            <input ref={passwordRef} type="password" name='password' placeholder='Enter your password' required />
                        </div>
                        <input className='form-submit' type="submit" value="Login" />
                    </form>
                    <p>Already have an account? <Link className='form-link' to="/register">Register page</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;