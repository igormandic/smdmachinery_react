import React, { Component } from 'react';
import '../css/Header1.css';
import NB from './NB';

class Header1 extends Component {
    render() {
        return (
            <div className="header">
                <div className="levi"> 
                    <a href="/" className="smd_logo">
                        <img className="smd_logo" src="/logo.png" alt="smd_logo" /> 
                    </a>
                </div>
                <div className="gornji">
                    <img className="phone_logo" src="/phone_logo.png" alt="phone_logo"/>
                    065409869
                    <img className="mail_logo" src="/mail_logo.png" alt="mail_logo"/> 
                    smd@gmail.com
                </div>
                <div className="donji"> 
                    <NB type={"home"} numOfElement={6}/>
                </div>
            </div>
        );
    }
}

export default Header1;