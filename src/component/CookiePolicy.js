import React, { Component } from 'react';
import '../css/UseAgreement.css'
import Header1 from './Header1';
import Footer from './Footer';

class UseAgreement extends Component {
    render(){
      return (
        <div className="">
        < Header1 type="home" />
        <div className="content123">
            <h1>Cookie Policy</h1>
            <p></p><div>"Cookies" are small text files that are collected on the hard drive of your computer by your browser and let the system identify you when you revisit our web site. We only use cookies to track your visits to our website; they do not define your identification and your personal info is kept anonymous unless you reveal them. These cookies do not harm hard disks of internet users and do not contain any viruses. These data cannot be individually associated with the users.&nbsp;<br/>
            <br/>
            </div>
            <div>Recording and storing of the information that have been voluntarily delivered by individual users are once again performed with the approval of these users.<br/>
            <br/>
            </div>
            <div>&nbsp;You may activate the settings on your browsers, which will allow you to reject some or all of these cookies and block them.&nbsp;</div>
            <div><br/>
            </div><p></p>
            <div className="clear"></div>
        </div>
        <Footer/>
    </div>
      );
    }
  }
  
  export default UseAgreement;