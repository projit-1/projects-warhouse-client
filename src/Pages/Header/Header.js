import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import LogoAnimation from '../LogoAnimation/LogoAnimation';



const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className='header sticky-top '>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <LogoAnimation></LogoAnimation>
                        {/* <img className='w-25' src={logo} alt="" /> */}

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='fs-4' as={Link} to="home">Home</Nav.Link>
                            <Nav.Link className='fs-4' as={Link} to="blogs">Blogs</Nav.Link>
                        </Nav>

                        <Nav className='mx-2'>
                            {
                                user && <>
                                    <Nav.Link className='fs-4' as={Link} to="inventories">Inventories</Nav.Link>
                                    <Nav.Link className='fs-4' as={Link} to="orders">Orders</Nav.Link>
                                </>
                            }
                            {
                                user ?
                                    <Button onClick={handleSignOut} variant="outline-success" className='bg-dark'>Sign Out</Button>
                                    :
                                    <Nav.Link className='fs-4' as={Link} to="signin">Sign In</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;