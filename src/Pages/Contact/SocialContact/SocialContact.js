import React from 'react';
import { FaFacebookSquare, FaTwitter, FaInstagram } from 'react-icons/fa'


const SocialContact = () => {
    return (
        <div className='w-50 mx-auto mx-5'>
            <a className='mx-3' href="https://">
                <FaFacebookSquare />
            </a>
            <a className='mx-3' href="http://">
                <FaTwitter />
            </a>
            <a className='mx-3' href="http://">
                < FaInstagram />
            </a>
        </div >
    );
};

export default SocialContact;