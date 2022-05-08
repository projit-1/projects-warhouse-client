import React from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <div className='d-flex about'>
            <div className=' container'>
                <div className="about container ">
                    <h3> About</h3>
                    <p> Welcome to NS Electronics, your number one source for all things [product]. We're dedicated to providing you the very best of [product], with an emphasis on [store characteristic 1], [store characteristic 2], [store characteristic 3].


                        Founded in [year] by [founder name], NS Electronics has come a long way from its beginnings in [starting location]. When [founder name] first started out, [his/her/their] passion for [brand message - e.g. "eco-friendly cleaning products"] drove them to start their own business.


                        We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.

                        <br />
                        <br />
                        Sincerely,
                        <br />
                        [founder name]
                    </p>
                </div>
                <div className="mission container ">
                    <h3> Mission</h3>
                    <p> Our main mission is to capable the people to produce what they need, what they want in the marketing sector. Making ensure the people that is ecommerc better for our world.</p>
                </div>
                <div className="vission container ">
                    <h3> Vision</h3>
                    <p> Like everything, we have a vision, which is removing hunger and make a green revolution in the world. People who are not aware of modern farm train them on it.</p>
                </div>
                <div className="values container ">
                    <h3> Values</h3>
                    <p> We and our team are always ready to keep our words in developing farming systems and providing information for the improvement of commercial activities.</p>
                </div>
            </div>
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
                    <Button variant="light">Submit</Button>{' '}
                </Form>
            </div>
        </div>
    );
};

export default AboutUs;