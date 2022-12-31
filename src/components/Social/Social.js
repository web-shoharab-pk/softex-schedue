import { Container, Grid } from '@mui/material';
import React from 'react';
import { socialData } from '../../__mock__/data';
import './Social.scss';
import arrLine from './../../images/arrow-right-white.svg';

const Social = () => {
    return (
        <Container className='social'>
            <Grid container spacing={3} rowSpacing={3}>
                <Grid item xs={12} md={4} lg={6}>
                    <div className="social--text">
                        <h5>Social Media</h5>
                        <p>Don’t Miss To Follow Us On Our Social <br /> Networks Accounts.</p>
                    </div>
                </Grid>
                <Grid item xs={12} md={8} lg={6}>
                    <div className='social--link-div'>
                        {
                            socialData?.map((item) => (
                                <div key={item?.id} className='social--link-div-item'>
                                    <img src={item?.icon} alt="" />
                                </div>
                            ))
                        }
                    </div>
                </Grid>
            </Grid>

            <div className="get-a-quote">
                <Grid container justifyContent='center'>
                    <Grid item xs={12} md={12} lg={10}>
                        <div className='get-a-quote--card'>
                            <h5>Let’s Create Big Stories Together</h5>
                            <p>
                                Mobile is in our nerves. We don’t just build apps, we create brand.
                                <br />
                                Choosing us will be your best decision.
                            </p>
                            <div className="get-a-quote--card--btn">
                                <a href="/">Get A Quote
                                    <img src={arrLine} alt="" />
                                </a>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>

        </Container>
    );
};

export default Social;