import React, { useState } from 'react'; 
import './SidebarContact.scss';

const SidebarContact = () => {

    const [state, setState] = useState('');

    const handleSetClassName = () => {
        if(state === '') {
            setState('active');
        } else {
            setState('');
        }
    }

    return (
        <div className={`sidebar-contact ${state}`}>
            <div onClick={handleSetClassName} className={`sidebar-contact--toggle`}>
                <img src={'https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/telephone-fill.svg'} alt="" />
            </div>
            <h5>Call Us Now</h5>

            <div className='sidebar-contact--call-info'>
                <a href="tel:+918000161161">
                    <img src={'https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/ind-flag.svg'} alt="" />
                    +91 8000 161161
                </a>
                <a href="tel:+13097914105">
                    <img src={'https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/us-flag.svg'} alt="" />
                    +1 309 791 4105
                </a>
            </div>

            <hr />

            <div className='sidebar-contact--schedule'>
                <a href="#/">
                    <img src={'https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/call-calendar-icon.svg'} alt="" />
                    <div className="mt-2">Schedule Call</div>
                </a>
            </div>
        </div>
    );
};

export default SidebarContact;