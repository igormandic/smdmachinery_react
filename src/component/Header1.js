import React, { Component } from 'react';
import '../css/Header1.css';
import NB from './NB';
import NB_Homepage from './NB_Homepage';

import Language from './Language'

class Header1 extends Component {
    render() {

        let nb = <NB numOfElement={6}/>;
    
        if(this.props.type === "home"){
            nb = <NB_Homepage numOfElement={6}/>;
        }

        return (
            <div className="header">
                <div className="levi"> 
                    <a href="/" className="smd_logo">
                        <img className="smd_logo" src="/logo.png" alt="smd_logo" /> 
                    </a>
                </div>
                <div className="gornji">
                    <div className="phone_mail">
                        <img className="phone_logo" src="/phone_logo.png" alt="phone_logo"/>
                        <p> 065409869 </p>
                        <img className="mail_logo" src="/mail_logo.png" alt="mail_logo"/> 
                        <p> smd@gmail.com </p>
                    </div>
                    <Language />
                </div>
                <div className="donji"> 
                    {nb}
                </div>
            </div>
        );
    }
}

export default Header1;