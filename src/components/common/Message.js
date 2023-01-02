import React from 'react';
import messLogo from './../../images/icons8-messages-50.png';
import './Message.scss';

const Message = () => {
    return (
        <div className='message'>
              <img src={messLogo} alt="" />
        </div>
    );
};

export default Message;