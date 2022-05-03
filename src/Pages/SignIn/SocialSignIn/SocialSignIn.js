import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';


const SocialSignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;

    if (error) {
        errorElement = <p className='text-danger'>Error: {error.message}</p>
    }

    if (user) {
        navigate('/home');
    }
    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className='w-50 mx-auto'>
                <form className=' mx-auto my-4'>
                    {errorElement}
                    <Button
                        onClick={() => signInWithGoogle()}
                        className='w-50 mx-auto d-block my-3 border-dark ' variant="white" size="lg">  <img className='' src="" alt="" />
                        <FcGoogle />   Google Sign In
                    </Button>
                </form>
                <form className='mx-auto my-4'>
                    <Button className='w-50 mx-auto d-block my-3' variant="primary" size="lg">  <img className='' src="" alt="" />
                        <FaFacebook />  Facbook Sign In
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default SocialSignIn;