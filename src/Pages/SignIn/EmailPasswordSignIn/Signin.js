import React from 'react';
import { Button, Form } from 'react-bootstrap';
import SocialSignIn from '../SocialSignIn/SocialSignIn';

const EmailPasswordSignIn = () => {
    return (
        <div>
            <h2>email pass word login</h2>
            <Form className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit"> Submit </Button>
            </Form>

            <div>
                <SocialSignIn></SocialSignIn>
            </div>
        </div>
    );
};

export default EmailPasswordSignIn;