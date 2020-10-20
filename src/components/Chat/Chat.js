import React from 'react';
import ChatHeader from '../ChatHeader/ChatHeader';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import CardGiftcardRoundedIcon from '@material-ui/icons/CardGiftcardRounded';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import GifIcon from '@material-ui/icons/Gif';
import './Chat.css';

function Chat() {
    return (
        <div className="chat">
            <ChatHeader />

            <div className="chat__messages">

            </div>
            <div className="chat__input">
                <AddCircleOutlineRoundedIcon fontSize="large"/>
                <form>
                    <input placeholder={'Message'}></input>
                    <button className="chat__inputButton" type="submit">Send Message</button>
                </form>

                <div className="chat__inputIcons">
                    <CardGiftcardRoundedIcon />
                    <GifIcon />
                    <EmojiEmotionsIcon />
                </div>
            </div>
        </div>
    )
}

export default Chat;
