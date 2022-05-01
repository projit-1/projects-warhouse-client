import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import telephone from '../../images/telephone.png'
import './SubBanner.css'

const SubBanner = () => {
    return (
        <div className='d-flex w-100  justify-content-between align-items-center'>
            <div className=' d-flex w-100 justify-content-center align-items-center'>
                <div> <img className='telephone' src={telephone} alt="" /></div>
                <div className='mt-3'><p className='text-warning fs-2'> 01711111111</p></div>
            </div>
            <div className='w-100 px-2'>
                <Form className="w-100 d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </div>
        </div>
    );
};

export default SubBanner;