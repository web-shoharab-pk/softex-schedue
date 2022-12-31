import { Grid } from '@mui/material';
import React from 'react';
import './Subscribe.scss';

const Subscribe = () => {
    return (
        <section className='subscribe'>
            <Grid container rowSpacing={3}>
                <Grid item xs={12} md={3} lg={4}>
                    <div className='subscribe--help'>
                        <h5>Help</h5>
                        <ul className='subscribe--help--list'>
                            <li>Contact Us</li>
                            <li>Privacy Policy</li>
                            <li>Sitemap</li>
                            <li>Global</li>
                        </ul>
                    </div>
                </Grid>
                <Grid item xs={12} md={9} lg={8}>
                    <div className="subscribe--form">
                        <h5>Subscribe to our newsletter</h5>
                        <p>Stay updated with latest technology trends and topics with us.</p>
                        <form action="">
                            <input type="email" required placeholder='Email@company.com' />
                            <button type='submit'>Subscribe</button>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </section>
    );
};

export default Subscribe;