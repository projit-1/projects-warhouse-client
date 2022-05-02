import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialSignIn from '../SocialSignIn/SocialSignIn';

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

    if (user) {
        navigate(from, { replace: true });
    }

    const handleUserSignIn = event => {
        event.preventDefault();

        signInWithEmailAndPassword(email, password);
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
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <p>{error?.message}</p>
                {
                    loading && <p>page is loading ... </p>
                }
                <Button variant="primary" type="submit"> Submit </Button>
            </Form>
            <p>
                New to NS Electronics? <Link to='/SignUp'>Create an account</Link>
            </p>
            <div>
                <SocialSignIn></SocialSignIn>
            </div>
        </div>
    );
};

export default EmailPasswordSignIn;