import React from 'react';
import logo from '../../images/logo.png';


const LogoAnimation = () => {
    return (
        <div className='logo'>
            <img className='w-25' src={logo} alt="" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" />
        </div>
    );
};

export default LogoAnimation;