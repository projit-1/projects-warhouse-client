import React from 'react';
import { FaFacebookSquare, FaTwitter, FaInstagram } from 'react-icons/fa'


const SocialContact = () => {
    return (
        <div className='w-100 mx-auto mx-5'>
            <div>
                <h4 className='text-warning fs-3 text-start px-3 '> JOIN US </h4>
            </div>
            <div className=' socialcontact d-flex'>
                <a className='  bg-secondary bg-gradient mx-3  px-3 py-2 rounded-3 text-light ' href="https://">
                    <FaFacebookSquare />
                </a>
                <a className=' bg-secondary bg-gradient  px-3 py-2 rounded-3 text-light' href="http://">
                    <FaTwitter />
                </a>
                <a className=' bg-secondary bg-gradient mx-3 px-3 py-2 rounded-3 text-light' href="http://">
                    < FaInstagram />
                </a>
            </div>
        </div >
    );
};

export default SocialContact;