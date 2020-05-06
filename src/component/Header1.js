import React, { Component } from 'react';
import '../css/Header1.css';
import NB from './NB';
import NBHomepage from './NB_Homepage';

import Language from './Language'

class Header1 extends Component {
    render() {

        const nb = this.props.type === "home" ? <NBHomepage type={this.props.type} numOfElement={6} /> : <NB type={this.props.type} numOfElement={6} name={this.props.name} />;

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
                        <p> +381 11 3612 162 </p>
                        <img className="mail_logo" src="/mail_logo.png" alt="mail_logo"/> 
                        <p> office@smdmachinery.rs </p>
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