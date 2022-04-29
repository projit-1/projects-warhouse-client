import React from 'react';
import { Button } from 'react-bootstrap';

const SocialSignIn = () => {
    return (
        <div>
            <div >
                <div>
                    <form className='mx-auto my-4'>
                        <Button className='w-50 mx-auto d-block my-3' variant="secondary" size="lg">  <img className='googleimge' src="" alt="" />
                            Start with Google
                        </Button>
                    </form>
                    <form className='mx-auto my-4'>
                        <Button className='w-50 mx-auto d-block my-3' variant="secondary" size="lg">  <img className='googleimge' src="" alt="" />
                            Start with Facbook
                        </Button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default SocialSignIn;