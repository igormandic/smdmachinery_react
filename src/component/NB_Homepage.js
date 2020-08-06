import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/NB_Homepage.css';
import { Link } from 'react-router-dom';
import { __ } from '../utils/i18n';

class NB_Homepage extends Component {
  constructor(init){
    super(init);
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange({target}){
    let nb = document.getElementById('NB_response');
    if (target.checked){
      nb.style.display = "block";
    } else {
      nb.style.display = "none";
    }
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      let currentScrollPos = window.pageYOffset;
      
      if (prevScrollpos <= currentScrollPos - 20) {
        document.getElementById("NB_response").style.display = "none";
        let cb = document.getElementById('check');
        cb.checked = '';
      } 
      prevScrollpos = currentScrollPos;
    }
  }
  render(){

  return (
    <div>
    <div className="NB_css">
      <nav>
        <ul>
          <li><a href="/">{__('Home page')}</a></li>
          <li><a href="/#companyList">{__('Companies')}</a>
            <ul>
              <li><Link to="/company/Wille"> 
                <img className="machine_logo" src="/Firme/Wille/logo.png" alt="machine_logo"/><span id="companyName">Wille</span> </Link></li>
              <li><Link to="/company/Broddson"> 
                <img className="machine_logo" src="/Firme/broddson/logo.png" alt="machine_logo"/><span id="companyName">Broddson</span> </Link></li>
              <li><a href="https://www.boschung.com/">
                <img className="machine_logo" src="/Firme/boschung/logo2.png" alt="machine_logo"/><span id="companyName">Boschung</span>  </a></li>
              <li><Link to="/company/Wille">
                <img className="machine_logo" src="/Firme/dorotea mekaniska/logo.png" alt="machine_logo"/><span id="companyName"> Dorotea mekaniska</span> </Link></li>
            </ul>
          </li>
          <div className="li_posle_padajuceg">
            <li><Link to="/aboutUs">{__('About us')}</Link></li>
            <li><Link to="/Services">{__('Servis')}</Link></li>
            <li><Link to="/contact">{__('Contact')}</Link></li>
          </div>
        </ul>
      </nav>
      </div>
      <div className="tri_crte">
        <label htmlFor="check" className="checkbtn">
          <input type="checkbox" id="check" onClick={this.handleChange}
                        defaultChecked={this.props.complete}/>
            <img src="/fa_bars.png" className="img_bars" alt="fa_bars"></img>
        </label>
      </div>
      <div className="NB_response" id="NB_response">
      <ul>
            <li><Link to="/"> {__('Home page')} </Link></li>
            <li><a href="#companyList"> {__('Companies')} </a>
              <ul>
                <li><Link to="/company/Wille">Wille</Link></li>
                <li><Link to="/company/Broddson">Broddson</Link></li>
                <li><a href="https://www.boschung.com/">Boschung </a></li>
                <li><Link to="/company/Wille">Dorotea mekaniska </Link></li>
              </ul>
            </li>
            <div className="li_posle_padajuceg">
            <li><Link to="/aboutUs">{__('About us')}</Link></li>
            <li><a href="/#" className="nsk">{__('Servis')}</a></li>
            <li><a href="/contact" className="nsk">{__('Contact')}</a></li>
          </div>
          </ul>
      </div>
    </div>
  );
  }
}

export default NB_Homepage;