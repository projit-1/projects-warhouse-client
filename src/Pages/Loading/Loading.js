import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='w-100 d-flex justify-content-center align-itemes-center'>
            <Spinner animation="border" variant="primary" />
        </div>
    );
};

export default Loading;