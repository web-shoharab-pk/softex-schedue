import { Container, Grid } from '@mui/material';
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import React, { useState } from 'react';
import { getDay, getDayName, getMonthName } from '../../utils/utils';
import bdFlag from './../../images/bd-flag.png';
import './Schedule.scss';


const Schedule = () => {
    const [value, setValue] = useState(new Date());
    const [selectTime, setSelectTime] = useState('12:00am');
    const [index, setIndex] = useState('');
    const [isGuest, setIsGuest] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [confirmCollapse, setConfirmCollapse] = useState(false);

    const handleConfirm = () => {
        setConfirm(true)
    }

    const handleSelectTime = (time, ind) => {
        setIndex(ind)
        setSelectTime(time);
    }

    const handleDateSelect = (date) => {
        setValue(date);
        setIndex('');
        setConfirmCollapse(true)
    }

    const isWeekend = (date) => {
        const day = date.day();
      
        return day === 6;
      };

    return (
        <section className='schedule'>
            <Container>
                <h1 className="schedule--title">Schedule Call</h1>

                <div className="schedule--container">
                    <Grid container rowSpacing={3} justifyContent="center">
                        <Grid item lg={4} md={6} xs={12} height="100%">
                            <div className="schedule--booking">
                                <div className="schedule--logo">
                                    <img src="https://d3v0px0pttie1i.cloudfront.net/uploads/user/logo/22523131/230c156a.png" alt="" />
                                </div>

                                <hr />
                                <div className="schedule--details">

                                    <p>Hyperlink Infosystem</p>
                                    <h1>Introduction Call With Hyperlink Infosystem</h1>

                                    <div className='schedule--time'>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE7CbyhtE0qIhAKynVJ2eNWJv3PQ7fER5uxg&usqp=CAU" alt="" />
                                        30 min
                                    </div>

                                    <div className="schedule--agenda">
                                        <span>Agenda:</span>
                                        <ul>
                                            <li>1. Introduction of Hyperlink infosystem</li>
                                            <li>2. Requirement understanding</li>
                                            <li>3. Similar work showcase</li>
                                            <li>4. Next actions</li>
                                        </ul>
                                    </div>
                                </div>

                                <button>Cookie settings</button>
                            </div>
                        </Grid>
                        {
                            confirm ?
                                <Grid item lg={8} md={6} xs={12}>
                                    <div className="details-div">
                                        <h2>Enter Details</h2>

                                        <div className="details-div--input">
                                            <label htmlFor="">Name *</label>
                                            <input type="text" />
                                        </div>

                                        <div className="details-div--input">
                                            <label htmlFor="">Email *</label>
                                            <input type="email" />
                                        </div>
                                        {
                                            isGuest ?
                                                <div className="details-div--input guest">
                                                    <label htmlFor="">Guest Email(s)</label>
                                                    <input type="email" />
                                                    <span>Notify up to 10 additional guests of the scheduled event.</span>
                                                </div> :
                                                <button onClick={() => setIsGuest(true)} className='guest-btn'>Add Guests</button>
                                        }
 
                                        <div className="details-input-div">
                                            <label htmlFor="">Phone Number *</label>
                                            <div>
                                                <img src={bdFlag} alt="" />
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="details-select-div">
                                            <label htmlFor="">Preferred Contact Mode *</label>
                                            <select name="" id="" >
                                                <option value="Zoom Conference Call">Zoom Conference Call</option>
                                                <option value="Phone Call">Phone Call</option>
                                                <option value="WhatsApp Call">WhatsApp Call</option>
                                            </select>
                                        </div>
                                        <div className="details-input-div">
                                            <label htmlFor="">Send text messages to</label>
                                            <div>
                                                <img src={bdFlag} alt="" />
                                                <input type="text" />
                                            </div>
                                        </div>

                                        <button className='schedule-event-btn'>Schedule Event</button>
                                    </div>
                                </Grid>
                                : <Grid item lg={confirmCollapse ? 8 : 4} md={6} xs={12}>
                                    <div className="schedule--calender">
                                        <Grid container spacing={2}>
                                            <Grid item lg={confirmCollapse ?  8 : 12} md={8} xs={12}>
                                                <h2>Select a Date & Tome</h2>
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <StaticDatePicker
                                                        displayStaticWrapperAs="desktop"
                                                        label="Week picker"
                                                        value={value}
                                                        onChange={(newValue) => {
                                                            handleDateSelect(newValue);
                                                        }}
                                                       shouldDisableDate={isWeekend}
                                                        renderInput={(params) => <TextField {...params} />}
                                                        inputFormat="'Week of' MMM d"
                                                    />
                                                </LocalizationProvider>

                                                <div className="time-zome">
                                                    <h2>Time Zome</h2>

                                                    <select name="" id="" value={"Asia/Dhaka (05:52"}>
                                                        <option value="Asia/Dhaka (05:52">Asia/Dhaka (05:52)</option>
                                                        <option value="Asia/Dhaka (05:52">Asia/Dhaka (05:52)</option>
                                                        <option value="Asia/Dhaka (05:52">Asia/Dhaka (05:52)</option>
                                                        <option value="Asia/Dhaka (05:52">Asia/Dhaka (05:52)</option>
                                                        <option value="Asia/Dhaka (05:52">Asia/Dhaka (05:52)</option>
                                                        <option value="Asia/Dhaka (05:52">Asia/Dhaka (05:52)</option>
                                                        <option value="Asia/Dhaka (05:52">Asia/Dhaka (05:52)</option>
                                                        <option value="Asia/Dhaka (05:52">Asia/Dhaka (05:52)</option>
                                                        <option value="Asia/Dhaka (05:52">Asia/Dhaka (05:52)</option>
                                                        <option value="Asia/Dhaka (05:52">Asia/Dhaka (05:52)</option>
                                                    </select>
                                                </div>
                                            </Grid>
                                            {
                                                confirmCollapse ?   <Grid item lg={4} md={4} xs={12}>
                                                <div className="time-section">
                                                    <p className="day-date">
                                                        {getDayName(value)}, {getMonthName(value)} {getDay(value)}
                                                    </p>

                                                    <div className="time-slot">
                                                        {
                                                            index !== '' ?
                                                                <div className="confirm-section">
                                                                    <button className='btn-1'>{selectTime}</button>
                                                                    <button onClick={handleConfirm} className='btn-2'>Confirm</button>
                                                                </div>
                                                                : ''
                                                        }
                                                        {
                                                            ['12:30am', '1:00am', '1:30am']
                                                                .splice(index, 4)
                                                                .map((i, l) => (
                                                                    <div onClick={() => handleSelectTime(i, l)} key={l} className="time-slot--item">
                                                                        <button>{i}</button>
                                                                    </div>
                                                                ))
                                                        }
                                                    </div>
                                                </div>
                                            </Grid> : ''
                                            }
                                          
                                        </Grid>
                                    </div>
                                </Grid>
                        }


                    </Grid>
                </div>
                    <hr />
            </Container>
        </section>
    );
};

export default Schedule;