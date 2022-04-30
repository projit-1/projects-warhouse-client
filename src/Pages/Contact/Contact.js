import React from 'react';
import { Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <div><h2>Email addresses mentioned in the comment form will always be used for privacy and never be used for spamming or sold to anyone. 100 percent safe guaranteed!

                We love comments from our readers/users, but any comments which are abusive, spread hatred, are racial, or in any way hurt anyone’s opinions will never be entertained. We keep our comments moderated to maintain the integrity of individuals. We reserve all rights to accept or reject comments.</h2></div>
            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
            </div>


        </div>
    );
};

export default Contact;