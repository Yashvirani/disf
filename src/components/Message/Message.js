import { Avatar } from '@material-ui/core';
import React from 'react';
import './Message.css';

function Message() {
    return (
        <div className="message">
            <Avatar />
            <div className="message__info">
                <h4>
                    Yash
                    <span className="message__timeStamp">
                        Timestamp
                    </span>
                    <p>Message</p>
                </h4>
            </div>
        </div>
    )
}

export default Message;
