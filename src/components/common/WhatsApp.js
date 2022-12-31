import React from 'react';
import wpLogo from './../../images/wp-bottom.svg';
import './WhatsApp.scss';

const WhatsApp = () => {
    return (
        <div className='whatsapp'>
            <a target="_blank" href="https://api.whatsapp.com/send?phone=918866368599&source=Website&text=Hello,Hyperlink%20InfoSystem" title='click to open whatsapp chat' rel="noreferrer">
                <img src={wpLogo} alt="" />
            </a>
        </div>
    );
};

export default WhatsApp;