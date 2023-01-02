import { Container } from '@mui/material';
import React, { useState } from 'react';
import logo from './../../images/logo.svg';
import './Navbar.scss';
import NavDrawer from './NavDrawer';

const Navbar = () => {

    const [isOpen, setIsOpne] = useState(false);

      const toggleDrawer = () => {
        setIsOpne(pre => !pre)
    };

 

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
                    <div className='humber-menu'  onClick={toggleDrawer}>
                        <ul>
                            <li>
                                <p className={isOpen ? 'nav-is-visible' : ''}>
                                    <span></span>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>

            <NavDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
        </header>
    );
};

export default Navbar;