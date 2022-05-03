import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import SocialSignIn from '../SignIn/SocialSignIn/SocialSignIn';
import auth from '../../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState(' ');
    const [confarmPassword, setConfarmPassword] = useState(' ');
    const [error, setError] = useState(' ');
    const navigate = useNavigate();


    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    }
    const handleConfarmPasswordBlur = (event) => {
        setConfarmPassword(event.target.value);
    }

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);


    if (user) {
        navigate('/home');
    }

    const handleCreateUser = event => {
        event.preventDefault();

        if (password !== confarmPassword) {
            setError("Your password didn't match");
            return;
        }
        if (password.length < 6) {
            setError("password must be 6 character or longer")
            return;
        }

        createUserWithEmailAndPassword(email, password);
    }


    return (
        <div>
            <h3 className='w-50 mx-auto bg-dark mt-2 text-light py-2 px-5 text-center'>Register Here</h3>
            <Form onSubmit={handleCreateUser} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <div className='d-flex'>
                        <div className='w-100'>
                            <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                        </div>
                        <div className='text-danger'> *</div>
                    </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <div className='d-flex '>
                        <div className='w-100'>
                            <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                        </div>
                        <div className='text-danger'> *</div>
                    </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <div className='d-flex'>
                        <div className='w-100'>
                            <Form.Control onBlur={handleConfarmPasswordBlur} type="password" placeholder="Confirm Password" required />
                        </div>
                        <div className='text-danger'>*</div>
                    </div>
                </Form.Group>

                <Form.Label className='mx-2'>Terms and Condirions </Form.Label>
                <input type="checkbox" class="form-check-input" id="terms"></input>
                <p className='text-danger'>{error}</p>
                <Button className='w-50 mx-auto d-block my-3' variant="primary" type="submit">
                    Sign Up
                </Button>
                <p className='link '>
                    Already have an account? <Link to='/signin' className='link  fs-4'>Sign In</Link>
                </p>
            </Form>
            <div className='d-flex w-50 mx-auto'>
                <div className=' sign w-50'></div>
                <div> <h5>or</h5></div>
                <div className=' sign w-50'></div>
            </div>
            <div>
                <SocialSignIn></SocialSignIn>
            </div>
        </div>
    );
};

export default SignUp;