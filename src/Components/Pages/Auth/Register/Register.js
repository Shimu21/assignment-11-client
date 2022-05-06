import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../../firebase/firebase.init';

const Register = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const ConfirmPasswordRef = useRef();
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    let showError;
    if (error) {
        showError = <p className='text-danger'>{error.message}</p>
    }

    let showLoading;
    if (loading) {
        showLoading = <p>Loading...</p>
    }

    if (user) {
        navigate('/home');
    }

    const handleSignUpSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = ConfirmPasswordRef.current.value;

        createUserWithEmailAndPassword(email, password);
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
                        {showLoading}
                        {showError}
                    </form>
                    <SocialLogin />
                    <p className='py-3'>Already have an account? <Link className='form-link' to="/login">login page</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;