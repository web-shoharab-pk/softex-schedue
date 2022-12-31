import { Container } from '@mui/material';
import React from 'react';
import './TopNav.scss';
import inFlag from './../../images/indflag.svg';
import usFlag from './../../images/usflag.svg';
import ukFlag from './../../images/ukflag.svg';

const TopNav = () => {
    return (
        <nav className='topNav'>
            <Container>
                <div className='topNav--div'>
                    <div className='topNav--link-grp'>
                        <a href="tel:+918000161161"><img src={inFlag} alt="" /><p>+91 8000 161161</p></a>
                        <a href="tel:+13097914105"><img src={usFlag} alt="" /><p>+1 309 791 4105</p></a>
                        <a href="tel:+442081338639"><img src={ukFlag} alt="" /><p>+44 20 8133 8639</p></a>
                    </div>
                    <div className='topNav--btn-grp'>
                        <button>Press Release</button>
                        <button>Our Fresh Work</button>
                        <button>Schedule Call</button>
                    </div>
                </div>
            </Container>
        </nav>
    );
};

export default TopNav;