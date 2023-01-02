import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import React, { Fragment } from 'react';
import { navData, socialData } from '../../__mock__/data';
import './NavDrawer.scss';

const NavDrawer = ({ isOpen, toggleDrawer }) => {


    const list = (anchor = 'left') => (
        <Box
            sx={{ width: 260 }}
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
        >
            <ul>
                {['Company', 'Services', 'Hire Developers', 'Case Study', 'Resources', 'Contact Us'].map((text, index) => (
                    <>
                        <li key={index.toString()}>
                            <p className='list-item'>{text}</p>
                        </li>
                    </>
                ))}
            </ul>
            <ul>
                {navData.map((item, index) => (
                    <li key={item.id.toString()} className='list-item-1'>
                        <img src={item.icon} alt="" />
                        {item?.phone}
                    </li>
                ))}
            </ul>
            <ul className='social-icon'>
                {
                    socialData?.map((item) => (
                        <li key={item?.id.toString()}>
                            <a href="/">
                                <img src={item.icon} alt="" />
                            </a>
                        </li>
                    ))
                }
            </ul>
        </Box>
    );


    return (
        <div>
            <Fragment>
                <Drawer
                    anchor={'left'}
                    open={isOpen}
                    variant="persistent"
                >
                    {list('left')}
                </Drawer>
            </Fragment>
        </div>
    );
};

export default NavDrawer;