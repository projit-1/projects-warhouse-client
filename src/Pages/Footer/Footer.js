import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import footerimage from '../../images/footerimg.png'
import SocialContact from '../Contact/SocialContact/SocialContact';
import SubBanner from '../SubBanner/SubBanner';



const Footer = () => {
    return (
        <div>
            <footer className="text-warning  border border-dark border border-3 text-primary">

                <div className=' d-flex  justify-content-between align-items-center '>
                    <div className="fooetr-img w-50  ">
                        <img className='w-100' src={footerimage} alt="" />
                    </div>
                    <div className="footer-men mx-auto">
                        <SubBanner></SubBanner>
                        <div className=''>
                            <div className=' text-start fs-3'>
                                <Nav.Link as={Link} to="aboutus">About Us</Nav.Link>
                                <Nav.Link as={Link} to="privacy">Privacy</Nav.Link>
                                <Nav.Link as={Link} to="contact">Contact Us</Nav.Link>
                            </div>
                            <div>  <SocialContact></SocialContact></div>
                        </div>
                    </div>
                </div>
                <div className="text-center bg-dark  d-flex  justify-content-between align-items-center ">
                    <p className='mx-5 py-5'> Copyright © 2022  NS Electronics</p>
                    <p className='mx-5'> Powered By:  NS Electronics, Khulna</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;