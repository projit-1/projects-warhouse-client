import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import footerimage from '../../images/footerimg.png'
import SocialContact from '../Contact/SocialContact/SocialContact';



const Footer = () => {
    return (
        <div>
            <footer className="bg-dark text-center text-primary">
                <div className=' d-flex  justify-content-between align-items-center '>
                    <div className="fooetr-img w-50  ">
                        <img className='w-100' src={footerimage} alt="" />
                    </div>
                    <div className="footer-menu mx-auto justify-content-center align-items-center">
                        <div>
                            <Nav.Link as={Link} to="aboutus">About Us</Nav.Link>
                            <Nav.Link as={Link} to="privacy">Privacy</Nav.Link>
                            <Nav.Link as={Link} to="contact">Contact Us</Nav.Link>
                            <SocialContact></SocialContact>
                        </div>
                        <div className="text-center  d-flex  justify-content-between align-items-center mx-3 py-3">
                            <p> Copyright © 2022  NS Electronics</p>
                            <p className='mx-2'> Powered By NS Electronics, Khulna</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;