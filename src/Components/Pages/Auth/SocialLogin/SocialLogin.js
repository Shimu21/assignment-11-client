import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase/firebase.init';
import useToken from '../../../../Hook/useToken';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const [token] = useToken(user);

    let showError;
    if (error) {
        showError = <p>{error.message}</p>
    }

    let showLoading;
    if (loading) {
        showLoading = <p>Loading...</p>
    }

    if (token) {
        navigate(from, { replace: true });
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