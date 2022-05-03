import React from 'react';
import logo from '../../images/logo.png'
// import Spin from 'react-reveal/Spin';

const LogoAnimation = () => {
    return (
        <div>
            {/* <Spin>
                <img className='w-25' src={logo} alt="" />
            </Spin> */}
            <img className='w-25' src={logo} alt="" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" />
        </div>
    );
};

export default LogoAnimation;