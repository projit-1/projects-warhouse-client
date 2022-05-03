import React from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <div className='d-flex about'>
            <div className=' container'>
                <div className="about container ">
                    <h3> About</h3>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis porro deserunt laborum sequi vitae rem nemo maiores doloribus incidunt atque odio at magnam mollitia, perferendis optio nisi quas vel accusantium!</p>
                </div>
                <div className="mission container ">
                    <h3> Mission</h3>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsam ab saepe facere voluptates sequi. Aut at eligendi impedit, cumque corrupti, molestias deserunt, sit error esse recusandae adipisci totam voluptas.</p>
                </div>
                <div className="vission container ">
                    <h3> Vision</h3>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem dicta, laudantium ut cupiditate, veniam repudiandae ipsam quis omnis esse quasi labore accusantium quos, minus nisi corporis impedit! Praesentium, non ducimus?</p>
                </div>
                <div className="values container ">
                    <h3> Values</h3>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod error fuga neque voluptates ea expedita odit saepe fugit? Iste quasi error repellendus sed odio ipsum non velit ea neque? Repudiandae!</p>
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