import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'

import LogoAnimation from '../LogoAnimation/LogoAnimation';



const Header = () => {

    return (
        <div>
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
                            <Button variant="outline-success" className='bg-dark'>Sign Out</Button>
                            <Nav.Link className='fs-4' as={Link} to="signin">Sign In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;