import React from 'react';
import '../css/Footer.css';

function Footer() {
  return (
    <div className="footer"> 
    <div className="center">
      <div className="links">
        <h3>SMDMACHINERY</h3>
        <ul>
          <li><a href="/#">ABOUT US</a></li>
          <li><a href="/#">PRODUCTION AND R&amp;D</a></li>
          <li><a href="/#">AWARDS</a></li>
          <li><a href="/#">HISTORY</a></li>
          <li><a href="/#">FACTORIES</a></li>
          <li><a href="/#">INTERNATIONAL OFFICES</a></li>
          <li><a href="/#">HUMAN RESOURCES</a></li>
          <li><a href="/#">PRESS KIT</a></li>
          <li><a href="/#">WALLPAPERS</a></li>
        </ul>
      </div>
      <div className="links">
        <h3>PRODUCTS</h3>
        <ul>
          <li><a href="/#" className="1" title="">BACKHOE LOADERS<span></span></a></li>
          <li><a href="/#" className="2" title="">WHEEL EXCAVATORS<span></span></a></li>
          <li><a href="/#" className="3" title="">CRAWLER EXCAVATORS<span>NEW</span></a></li>
          <li><a href="/#" className="4" title="">SPECIAL PURPOSE EXCAVATORS<span></span></a></li>
          <li><a href="/#" className="5" title="">MOTOR GRADERS<span></span></a></li>
          <li><a href="/#" className="6" title="">WHEEL LOADER<span></span></a></li>
          <li><a href="/#" className="44" title="">SOIL COMPACTORS<span>NEW</span></a></li>
        </ul>
      </div>
      <div className="links">
        <h3>AFTER SALES SERVICES</h3>
        <ul>
          <li><a href="/#">GENERAL INFORMATION</a></li>
          <li><a href="/#">SPARE PARTS</a></li>
          <li><a href="/#">SERVICE</a></li>
          <li><a href="/#">TECHNICAL TRAINING</a></li>
        </ul>
      </div>
      <div className="links">
        <h3>CONTACT US</h3>
        <ul>
            <li><a href="/#" title="">CONTACT</a></li>
            <li><a href="/#" title="">SALES OFFICES IN TURKEY</a></li>
            <li><a href="/#" title="">INTERNATIONAL DEALERS</a></li>
            <li><a href="/#" title="">CUSTOMER RELATIONS FORM</a></li>
        </ul>
      </div>
      <div className="contact-social">  
        <div className="social">
          <h4>SMDMACHINERY AT SOCIAL MEDIA</h4>
          <ul>
            <li><a href="/#" title="" target="_blank">
              <img src="./images/icon-facebook.svg" alt=""/></a></li>
            <li><a href="/#" title="" target="_blank">
              <img src="./images/icon-twitter.svg" alt=""/></a></li>
            <li><a href="/#" title="" target="_blank">
              <img src="./images/icon-linkedin.svg" alt=""/></a></li>
            <li><a href="/#" title="" target="_blank">
              <img src="./images/icon-youtube.svg" alt=""/></a></li>
            <li><a href="/#" title="" target="_blank">
              <img src="./images/icon-instagram.svg" alt=""/></a></li>
            </ul>
        </div>
      </div>
      <div className="clear"></div>
      <div className="copyright">
        <div className="copyright-links">   
          <a href="/#" title="">Use Agreement</a>
          <a href="/#" title="">Conditions For Use</a>
          <a href="/#" title="">Sitemap</a>
          <a href="/#" title="">Cookie Policy</a>
          <a href="/#" title="">Protection of Personal Data</a>
        </div>
        <div className="logo">
          <a href="/#" title="">
            <img src="/logo.png" alt=""/></a>
        </div>
        <p>Copyright © 2020, All Rights Reserved</p>
        <br/>
      </div>
    </div>
    <div className="clear"></div>
    </div>
  );
}
export default Footer;

