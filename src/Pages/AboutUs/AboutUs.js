import React from 'react';
import { Form, FormControl, InputGroup } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <div className='container'>
            <div className="about">
                <h3> About</h3>
                <p> nsfarmhouse is using scientific and modern methods in farming and agriculture worldwide. We started this website with experienced team members. We accept members throughout the world who want to contribute and share their farming experience. We started this website by keeping in mind one thing that is technology development in the farming system and increase production for increased population in the world. Most of our team members are well educated and technically sound. Modern farming systems also help to continue the farming business profit than traditional farming methods for poor farmers. We strongly believe that sufficient information is a must for agricultural or farming revolution and make a green world.</p>
            </div>
            <div className="mission">
                <h3> Mission</h3>
                <p> Our main mission is to capable the people to produce what they need, what they want in the agriculture sector. Making ensure the people that farming is better for our world.</p>
            </div>
            <div className="vission">
                <h3> Vision</h3>
                <p> Like everything, we have a vision, which is removing hunger and make a green revolution in the world. People who are not aware of modern farm train them on it.</p>
            </div>
            <div className="values">
                <h3> Values</h3>
                <p> I and my team are always ready to keep our words in developing farming systems and providing information for the improvement of agricultural activities.</p>
            </div>
            <div className="comment">
                <h4>Please Comment Here</h4>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <InputGroup className="mb-3">
                            <FormControl aria-label="First name" />
                            <FormControl aria-label="Last name" />
                        </InputGroup>
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

export default AboutUs;