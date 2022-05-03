import React from 'react';
import { Button } from 'react-bootstrap';
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

const SocialSignIn = () => {
    return (
        <div>
            <div className='w-50 mx-auto'>
                <form className=' mx-auto my-4'>
                    <Button className='w-50 mx-auto d-block my-3 border-dark ' variant="white" size="lg">  <img className='' src="" alt="" />
                        <FcGoogle />  Start with Google
                    </Button>
                </form>
                <form className='mx-auto my-4'>
                    <Button className='w-50 mx-auto d-block my-3' variant="primary" size="lg">  <img className='' src="" alt="" />
                        <FaFacebook />  Start with Facbook
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default SocialSignIn;