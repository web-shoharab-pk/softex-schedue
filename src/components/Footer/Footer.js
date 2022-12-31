import { Container, Grid } from '@mui/material';
import React from 'react';
import { menuData } from '../../__mock__/data';
import Locate from '../Locate/Locate';
import Subscribe from '../Subscribe/Subscribe';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <Grid container rowSpacing={3} spacing={3}>
                    {
                        menuData?.map((item) => (
                            <Grid key={item?.id} item xs={12} md={6} lg={4}>
                                <div className="footer--list">
                                    <h5 className={`title ${item?.class}`}>{item?.title}</h5>

                                    <ul>
                                        {
                                            item?.list?.map((l) => (
                                                <li key={l} className="footer--list--item">
                                                    <a key={l} href="/">{l}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </Grid>
                        ))
                    }
                </Grid>

                <Locate />

                <Subscribe />

                <div className="footer--bottom">
                   <p>© 2022 
                    <a href="#/"><b> Hyperlink InfoSystem </b></a>
                    | All Rights Reserved.
                    </p> 
                </div>
            </Container>
        </footer>
    );
};

export default Footer;