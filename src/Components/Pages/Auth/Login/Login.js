import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../../firebase/firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';


const Register = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, passError] = useSendPasswordResetEmail(
        auth
    );
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();

    let showError;
    if (error || passError) {
        showError = <p className='text-danger'>{error?.message} {passError?.message}</p>
    }

    let showLoading;
    if (loading || sending) {
        showLoading = <p>Loading...</p>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleLoinSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    };

    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        toast('Sent email');
    }

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
                        {showLoading}
                        {showError}
                        <input className='form-submit' type="submit" value="Login" />
                    </form>
                    <SocialLogin />
                    <p className='py-3'>Create an account? <Link className='form-link' to="/register">Register page</Link></p>
                    <p className='py-3'>Forget Password? <Link className='form-link' to='' onClick={handleResetPassword}>Reset Password</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;