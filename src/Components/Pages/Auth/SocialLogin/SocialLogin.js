import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import auth from '../../../../firebase/firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let showError;
    if (error) {
        showError = <p>{error.message}</p>
    }

    let showLoading;
    if (loading) {
        showLoading = <p>Loading...</p>
    }

    if (user) {
        navigate('/home');
    }
    return (
        <div>
            <div className='d-flex'>
                <div style={{ height: '2px', backgroundColor: "lightpink" }} className="w-50"></div>
                <span className='mb-3'>OR</span>
                <div style={{ height: '2px', backgroundColor: "lightpink" }} className="w-50"></div>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                {showLoading}
                {showError}
                <button onClick={() => signInWithGoogle()} className='btn btn-danger py-2 w-50'><FcGoogle className='me-3' />Google Login</button>
            </div>
        </div>
    );
};

export default SocialLogin;