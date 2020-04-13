import React, { Component } from 'react';
import '../css/Header1.css';
import NB from './NB';

import Language from './Language'

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
                    <p> 065409869 </p>
                    <img className="mail_logo" src="/mail_logo.png" alt="mail_logo"/> 
                    <p> smd@gmail.com </p>
                    <Language />
                </div>
                <div className="donji"> 
                    <NB type={this.props.type} numOfElement={this.props.numOfElement}/>
                </div>
            </div>
        );
    }
}

export default Header1;