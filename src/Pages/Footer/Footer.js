import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <footer className="bg-dark text-center text-white">
                <Form className=" w-50 d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>




                <div className="text-center p-3">
                    © 2022 Copyright:
                    <h6 className='my-3'>NS Electronics, Khulna</h6>
                </div>

            </footer>


        </div>
    );
};

export default Footer;