import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import { auth,provider } from '../firebase/firebase';

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).catch(error => {
            alert(error.message)
        });
    };
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Discord_logo.svg/349px-Discord_logo.svg.png"></img>
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login;
