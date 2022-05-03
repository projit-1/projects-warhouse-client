import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialSignIn from '../SocialSignIn/SocialSignIn';
import '../SignIn.css'
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import Loading from '../../Loading/Loading';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const EmailPasswordSignIn = () => {
    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState(' ');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    }
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );
    if (user) {
        navigate(from, { replace: true });
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    const resetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        } else {
            toast('please enter your email address')
        }
    }

    return (
        <div>
            <h3 className='w-50 mx-auto bg-dark mt-2 text-light py-2 px-5 text-center'>Log In</h3>
            <Form onSubmit={handleUserSignIn} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                </Form.Group>
                <input type="checkbox" class="form-check-input" id="terms"></input>
                <Form.Label className='mx-2 text-primary'>  Check me out
                </Form.Label>
                <p>{error?.message}</p>
                {
                    loading && <Loading></Loading>
                }
                <Button className='w-50 px-3' variant="primary" type="submit">Log In </Button>
            </Form>
            <p className='link '>
                New to NS Electronics? <Link to='/SignUp' className='link  fs-4'>Create an account</Link>
            </p>
            <p className='link '>
                Forgate password? <Link to='' className='link  fs-4' onClick={resetPassword}>Reset password</Link>
            </p>
            <div>
                <SocialSignIn></SocialSignIn>
                <ToastContainer />
            </div>
        </div>
    );
};

export default EmailPasswordSignIn;