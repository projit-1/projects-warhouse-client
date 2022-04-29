import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialSignIn from '../SignIn/SocialSignIn/SocialSignIn';

const SignUp = () => {
    return (
        <div>
            <h2>please Sign Up here</h2>
            <h3 className='w-50 mx-auto bg-dark mt-2 text-light py-2 px-5 text-center'>Register Here</h3>
            <Form className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address *</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password *</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                    <Form.Label>Confirm Password * </Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" required />
                </Form.Group>


                <Form.Label className='mx-2'>Terms and Condirions </Form.Label>
                <input type="checkbox" class="form-check-input" id="terms"></input>
                <Button className='w-50 mx-auto d-block my-3' variant="primary" type="submit">
                    Sign Up
                </Button>
                <p>
                    Already have an account? <Link to='/signin'>Sign In</Link>
                </p>
            </Form>
            <div className='d-flex w-50 mx-auto'>
                <div className=' sign w-100 '></div>
                <div> <h5>or</h5></div>
                <div className=' sign w-100'></div>
            </div>


            <div>
                <SocialSignIn></SocialSignIn>
            </div>
        </div>
    );
};

export default SignUp;