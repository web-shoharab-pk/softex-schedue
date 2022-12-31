import { Grid } from '@mui/material';
import React from 'react';
import { locateData } from '../../__mock__/data';
import './Locate.scss';

const Locate = () => {
    return (
        <section className='locate'>
            <h5 className="locate--title">Locate Us</h5>

            <Grid container rowSpacing={3} spacing={3}>
                {
                    locateData?.map((item) => (
                        <Grid key={item?.id} item xs={12} md={6} lg={3}>
                        <div className="locate--card">
                            <img src={item?.img} alt="" />
                            <div className="locate--card--content">
                                <h6>
                                    <img src={item?.icon} alt="" />
                                    {item?.title}
                                </h6>
                                <p>{item?.desc}</p>
                                <span>{item?.phone}</span>
                            </div>
                        </div>
                    </Grid>
                    ))
                }
            </Grid>
        </section>
    );
};

export default Locate;