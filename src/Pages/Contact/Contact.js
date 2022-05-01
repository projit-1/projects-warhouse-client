import React from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className='d-flex'>
            <div className='container'>
                <p className='mx-3 my-5'>Email addresses mentioned in the comment form will always be used for privacy and never be used for spamming or sold to anyone. 100 percent safe guaranteed!

                    We love comments from our readers/users, but any comments which are abusive, spread hatred, are racial, or in any way hurt anyone’s opinions will never be entertained. We keep our comments moderated to maintain the integrity of individuals. We reserve all rights to accept or reject comments.</p>
            </div>
            <div>
                <div className="comment bg-primary">
                    <h4>Please Comment Here</h4>
                    <Form className='px-3 py-2'>
                        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                            <InputGroup className="mb-3 ">
                                <FormControl aria-label="First name
                            " placeholder="First name" />
                                <FormControl aria-label="Last name" placeholder="Last name" />
                            </InputGroup>
                            <Form.Label></Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>

                            </Form.Label>
                            <Form.Control placeholder="Write your comment here ..." as="textarea" rows={3} />
                        </Form.Group>
                        <Button variant="success">Primary</Button>{' '}
                    </Form>
                </div>
            </div>


        </div>
    );
};

export default Contact;