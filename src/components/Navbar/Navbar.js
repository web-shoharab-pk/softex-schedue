import { Container } from '@mui/material';
import React from 'react';
import './Navbar.scss';
import logo from './../../images/logo.svg';

const Navbar = () => {
    return (
        <header className='navbar'>
            <Container>
                <div className='navbar--div'>
                    <div className='navbar--div--logo'>
                        <a href="/">
                            <img src={logo} alt="Logo" />
                        </a>
                    </div>
                    <div className='navbar--menu'>
                        <a href="/">Company</a>
                        <a href="/">Services</a>
                        <a href="/">Hire Developers</a>
                        <a href="/">Case Study</a>
                        <a href="/">Resources</a>
                        <a href="/">Contact Us</a>
                        <a href="/">Get A Free Quote</a>
                    </div>
                    {/* <div></div> */}
                </div>
            </Container>
        </header>
    );
};

export default Navbar;