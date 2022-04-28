import React from 'react';
import notFound from "../../images/NotFound.jpg"

const NotFound = () => {
    return (
        <div className='mx-auto my-5'>
            <h2 className='text-danger'> The Page is not Found !!! </h2>
            <img src={notFound} alt="" />
        </div>
    );
};

export default NotFound;