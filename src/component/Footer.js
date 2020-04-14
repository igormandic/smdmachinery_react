import React from 'react';
import '../css/Footer.css';


function Footer() {
  return (
    <div className="footer"> 
    <div className="center">
      <div className="links">
        <h3>SMDMACHINERY</h3>
        <ul>
          <li><a href="./28/p/about-us">ABOUT US</a></li>
          <li><a href="./40/p/production-rd">PRODUCTION AND R&amp;D</a></li>
          <li><a href="./41/p/awards">AWARDS</a></li>
          <li><a href="./30/p/history">HISTORY</a></li>
          <li><a href="./52/p/factories">FACTORIES</a></li>
          <li><a href="./29/p/international-offices">INTERNATIONAL OFFICES</a></li>
          <li><a href="./32/p/human-resources">HUMAN RESOURCES</a></li>
          <li><a href="./58/p/press-kit">PRESS KIT</a></li>
          <li><a href="./10066/p/wallpapers">WALLPAPERS</a></li>
        </ul>
      </div>
      <div className="links">
        <h3>PRODUCTS</h3>
        <ul>
          <li><a href="./1/u/backhoe-loaders" className="1" title="">BACKHOE LOADERS<span></span></a></li>
          <li><a href="./2/u/wheel-excavators" className="2" title="">WHEEL EXCAVATORS<span></span></a></li>
          <li><a href="./3/u/crawler-excavators-h4-series" className="3" title="">CRAWLER EXCAVATORS<span>NEW</span></a></li>
          <li><a href="./4/u/special-purpose-excavators" className="4" title="">SPECIAL PURPOSE EXCAVATORS<span></span></a></li>
          <li><a href="./5/u/motor-graders" className="5" title="">MOTOR GRADERS<span></span></a></li>
          <li><a href="./6/u/wheel-loader" className="6" title="">WHEEL LOADER<span></span></a></li>
          <li><a href="./44/u/soil-compactors" className="44" title="">SOIL COMPACTORS<span>NEW</span></a></li>
        </ul>
      </div>
      <div className="links">
        <h3>AFTER SALES SERVICES</h3>
        <ul>
          <li><a href="./42/p/general-information">GENERAL INFORMATION</a></li>
          <li><a href="./34/p/spare-parts">SPARE PARTS</a></li>
          <li><a href="./35/p/sevice">SERVICE</a></li>
          <li><a href="./36/p/technical-training">TECHNICAL TRAINING</a></li>
        </ul>
      </div>
      <div className="links">
        <h3>NEWS</h3>
        <ul>
          <li><a href="./press-coverage" title="">PRESS COVERAGE</a></li>
          <li><a href="./press-releases" title="">PRESS RELEASES</a></li>
          <li><a href="./events" title="">EVENTS</a></li>
          <li><a href="./videos" title="">VIDEOS</a></li>
        </ul>
      </div>
      <div className="links">
        <h3>CONTACT US</h3>
        <ul>
            <li><a href="./contact" title="">CONTACT</a></li>
            <li><a href="./regional-offices" title="">SALES OFFICES IN TURKEY</a></li>
            <li><a href="./international-dealers-and-network" title="">INTERNATIONAL DEALERS</a></li>
            <li><a href="./customer-relations-form" title="">CUSTOMER RELATIONS FORM</a></li>
        </ul>
      </div>
      <div className="contact-social">  
        <div className="social">
          <h4>SMDMACHINERY AT SOCIAL MEDIA</h4>
          <ul>
            <li><a href="#" title="" target="_blank">
              <img src="./images/icon-facebook.svg" alt=""/></a></li>
            <li><a href="#" title="" target="_blank">
              <img src="./images/icon-twitter.svg" alt=""/></a></li>
            <li><a href="#" title="" target="_blank">
              <img src="./images/icon-linkedin.svg" alt=""/></a></li>
            <li><a href="#" title="" target="_blank">
              <img src="./images/icon-youtube.svg" alt=""/></a></li>
            <li><a href="#" title="" target="_blank">
              <img src="./images/icon-instagram.svg" alt=""/></a></li>
            </ul>
        </div>
      </div>
      <div className="clear"></div>
      <div className="copyright">
        <div className="copyright-links">     
          <a href="./45/p/use-agreement" title="">Use Agreement</a>
          <a href="./46/p/conditions-for-use" title="">Conditions For Use</a>
          <a href="./47/p/sitemap" title="">Sitemap</a>
          <a href="./57/p/cerez-politikasi-en" title="">Cookie Policy</a>
          <a href="./10065/p/protection-of-personal-data" title="">Protection of Personal Data</a>
        </div>
        <div className="logo">
          <a href="#" title="">
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

