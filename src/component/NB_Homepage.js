import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/NB_Homepage.css';
import { Link } from 'react-router-dom';
import { __ } from '../utils/i18n';

class NB_Homepage extends Component {
render(){

  return (
    <div>
    <div className="NB_css">
      <nav>

        <input type="checkbox" id="check"/>
        <label htmlFor="check" className="checkbtn">
        <img src="/fa_bars.png" className="img_bars" alt="fa_bars"></img>
        </label>

        <ul>
          <li><a href="/">{__('Home page')}</a></li>
          <li><a href="#companyList">{__('Companies')}</a>
            <ul>
              <li><Link to="/company/WILLE"> 
                <img className="machine_logo" src="/Firme/wille/logo.png" alt="machine_logo"/> Wille</Link></li>
              <li><Link to="/company/Broddson"> 
                <img className="machine_logo" src="/Firme/broddson/logo.png" alt="machine_logo"/> Broddson</Link></li>
              <li><a href="https://www.boschung.com/">
                <img className="machine_logo" src="/Firme/boschung/logo.jpg" alt="machine_logo"/> Boschung </a></li>
              <li><Link to="/company/WILLE">
                <img className="machine_logo" src="/Firme/dorotea mekaniska/logo.png" alt="machine_logo"/> Dorotea mekaniska </Link></li>
            </ul>
          </li>
          <div className="li_posle_padajuceg">
            <li><Link to="/aboutUs">{__('About us')}</Link></li>
            <li><a href="/#" className="nsk">{__('Servis')}</a></li>
            <li><a href="/contact" className="nsk">{__('Contact')}</a></li>
          </div>
        </ul>
      </nav>
      </div>
    </div>
  );
  }
}

export default NB_Homepage;