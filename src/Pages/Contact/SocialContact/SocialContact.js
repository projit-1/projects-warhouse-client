import React from 'react';
import { FaFacebookSquare, FaTwitter, FaInstagram } from 'react-icons/fa'


const SocialContact = () => {
    return (
        <div className='w-100 mx-auto mx-5'>
            <div>
                <h4 className='text-warning'> Flow Us</h4>
            </div>
            <div className='d-flex '>
                <a className='mx-3 bg-light px-2 py-1 "' href="https://">
                    <FaFacebookSquare />
                </a>
                <a className='bg-light px-2 py-1' href="http://">
                    <FaTwitter />
                </a>
                <a className='mx-3 bg-light px-2 py-1' href="http://">
                    < FaInstagram />
                </a>
            </div>
        </div >
    );
};

export default SocialContact;