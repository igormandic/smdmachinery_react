import React from 'react';
import '../css/Footer.css';
import { Link } from 'react-router-dom';
import ReturnToTop from './ReturnToTop';
import { __ } from '../utils/i18n';


function Footer() {
  return (
    <div className="footer"> 
    <div className="center">
      <div className="links">
        <h3>SMD MACHINERY</h3>
        <ul>
          <li><Link to="/aboutUs">{__('About us')}</Link></li>
          <li><Link to="/services">{__('Servis')}</Link></li>
          <li><Link to="/company/Wille/attachments">{__('Attachments')}</Link></li>
        </ul>
      </div>
      <div className="links">
        <h3>{__('Companies')}</h3>
        <ul>
          <li><Link to="/company/Wille">Wille</Link></li>
          <li><Link to="/company/Broddson">Broddson</Link></li>
          <li><Link to="/aboutUs">Boschung</Link></li>
          <li><Link to="/aboutUs">Dorotea Mekaniska</Link></li>
        </ul>
      </div>
      <div className="links">
        <h3>{__('Contact')}</h3>
        <ul>
          <li>Beograd</li>
          <li>Kraljice Natalije 72</li>
          <li>office@smdmachinery.rs</li>
          <li>+381 11 3612 162 </li>
        </ul>
      </div>
      <div className="contact-social">  
        <div className="social">
          <h4>{__('SMDMACHINERY AT SOCIAL MEDIA')}</h4>
          <ul>
            <li><a href="https://instagram.com/smd_machinery?igshid=3qdwl3cgbtk0" title="Instagram" target="_blank" rel="noopener noreferrer" className="socialLogo">
              <img src="/instagram.png" alt="instagram"/></a></li>
            <li><a href="https://www.youtube.com/channel/UCn_FJBYuAK8iGpUmFSEiA3g" title="Youtube" target="_blank" rel="noopener noreferrer" className="socialLogo">
              <img src="/youtube.png" alt="Youtube"/></a></li>
            </ul>
        </div>
      </div>
      <div className="clear"></div>
      <div className="copyright">
        <div className="copyright-links">   
          <Link to="/useAgreement"> Use Agreement</Link>
          <Link to="/cookiePolicy"> Cookie Policy</Link>
        </div>
        <div className="logo">
          <a href="/#" title="">
            <img src="/beliLogo.png" alt="SMDMachinery"/></a>
        </div>
        <p id="cr">Copyright © 2020, All Rights Reserved</p>
        <br/>
      </div>
    </div>
    <div className="clear"></div>
    <ReturnToTop/>
    </div>
  );
}
export default Footer;

