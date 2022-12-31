import { Container, Grid } from '@mui/material';
import React from 'react';
import './Schedule.scss';

const Schedule = () => {
    return (
        <section className='schedule'>
            <Container>
                <h1 className="schedule--title">Schedule Call</h1>

                <div className="schedule--container">
                    <Grid container spacing={3} rowSpacing={3} justifyContent="center">
                        <Grid lg={5} md={6} xs={12}>
                            <div className="schedule--booking-details">
                                <img src="https://d3v0px0pttie1i.cloudfront.net/uploads/user/logo/22523131/230c156a.png" alt="" />

                                <hr />
                                <p>Hyperlink Infosystem</p>
                                <h1>Introduction Call With Hyperlink Infosystem</h1>

                                <div className='schedule--time'>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE7CbyhtE0qIhAKynVJ2eNWJv3PQ7fER5uxg&usqp=CAU" alt="" />
                                    30 min
                                </div>

                                <div className="schedule--agenda">
                                    <p>Agenda:</p>
                                     <ul>
                                        <li>1. Introduction of Hyperlink infosystem</li>
                                        <li>2. Requirement understanding</li>
                                        <li>3. Similar work showcase</li>
                                        <li>4. Next actions</li>
                                     </ul>
                                </div>

                                <button>Cookie settings</button>
                            </div>
                        </Grid>
                        <Grid lg={5} md={6} xs={12}>

                        </Grid>
                    </Grid>
                </div>
            </Container>
        </section>
    );
};

export default Schedule;