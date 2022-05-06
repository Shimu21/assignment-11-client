import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css';


const Register = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const ConfirmPasswordRef = useRef();



    const handleSignUpSubmit = (event) => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = ConfirmPasswordRef.current.value;

        console.log(email, password, confirmPassword);

    };

    return (
        <div className='form-container'>
            <div className='input-container shadow-sm'>
                <div className='p-5'>
                    <h2 className='form-title'>Register</h2>

                    <form className='p-3' onSubmit={handleSignUpSubmit}>
                        <div className='input-group'>
                            <label htmlFor="email">Email</label>
                            <input ref={emailRef} type="email" name='email' placeholder='Enter your email' required />
                        </div>

                        <div className='input-group'>
                            <label htmlFor="password">Password</label>
                            <input ref={passwordRef} type="password" name='password' placeholder='Enter your password' required />
                        </div>

                        <div className='input-group'>
                            <label htmlFor="confirm-password">Conform Password</label>
                            <input ref={ConfirmPasswordRef} type="password" name='confirm-password' placeholder='Enter your password' required />
                        </div>
                        <input className='form-submit' type="submit" value="Register" />
                    </form>
                    <SocialLogin />
                    <p>Already have an account? <Link className='form-link' to="/login">login page</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;