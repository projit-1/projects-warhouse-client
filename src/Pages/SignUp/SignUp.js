import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import SocialSignIn from '../SignIn/SocialSignIn/SocialSignIn';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';


const SignUp = () => {
    const [email, setEmail] = useState(' ');
    const [name, setName] = useState(' ');
    const [password, setPassword] = useState(' ');
    const [confarmPassword, setConfarmPassword] = useState(' ');
    const [error, setError] = useState(' ');
    const navigate = useNavigate();
    const [agree, setAgree] = useState(false);


    const handleNameBlur = (event) => {
        setName(event.target.value);
    }
    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    }
    const handleConfarmPasswordBlur = (event) => {
        setConfarmPassword(event.target.value);
    }

    const [createUserWithEmailAndPassword, user, loading] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, error1] = useUpdateProfile(auth);


    if (user) {
        navigate('/home');
    }

    const handleCreateUser = async (event) => {
        event.preventDefault();


        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });

        navigate('/home');

        if (password !== confarmPassword) {
            setError("Your password didn't match");
            return;
        }
        if (password.length < 6) {
            setError("password must be 6 character or longer")
            return;
        }
    }
    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className='w-50 mx-auto bg-dark mt-2 text-light py-2 px-5 text-center'>Register Here</h3>
            <Form onSubmit={handleCreateUser} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <div className='d-flex'>
                        <div className='w-100'>
                            <Form.Control onBlur={handleNameBlur} type="email" placeholder="Name" required />
                        </div>
                        <div className='text-danger'> *</div>
                    </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <div className='d-flex'>
                        <div className='w-100'>
                            <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                        </div>
                        <div className='text-danger'> *</div>
                    </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <div className='d-flex '>
                        <div className='w-100'>
                            <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                        </div>
                        <div className='text-danger'> *</div>
                    </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <div className='d-flex'>
                        <div className='w-100'>
                            <Form.Control onBlur={handleConfarmPasswordBlur} type="password" placeholder="Confirm Password" required />
                        </div>
                        <div className='text-danger'>*</div>
                    </div>
                </Form.Group>
                <input onClick={() => setAgree(!agree)} type="checkbox" class="form-check-input" id="terms"></input>
                <Form.Label className='mx-2 text-primary'> <Link to='privacy' className={agree ? 'text-primary' : 'text-danger'} > Terms and Condirions     </Link>
                </Form.Label>
                <p className='text-danger'>{error}</p>
                <Button disabled={!agree}
                    className='w-50 mx-auto d-block my-3' variant="primary" type="submit">
                    Register
                </Button>
                <p className='link '>
                    Already have an account? <Link to='/signin' className='link  fs-4'>Sign In</Link>
                </p>
            </Form>
            <div className='d-flex w-50 mx-auto'>
                <div className=' sign w-50'></div>
                <div> <h5>or</h5></div>
                <div className=' sign w-50'></div>
            </div>
            <div>
                <SocialSignIn></SocialSignIn>
            </div>
        </div >
    );
};

export default SignUp;