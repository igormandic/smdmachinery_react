import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/NB.css';
import { Link } from 'react-router-dom';
import { __ } from '../utils/i18n';

class NB extends Component {
  constructor(init){
    super(init);
    this.handleChange = this.handleChange.bind(this);
  }
  UNSAFE_componentWillMount() {
        this.setState({path:window.location});
  }
  componentDidUpdate(_nextProps, _nextState) {
    if (window.location.pathname !== this.state.path) {
      let nb = document.getElementById('NB_response');
      nb.style.display = "none";
      let cb = document.getElementById('check');
      cb.checked = '';
    }
    window.scrollTo(0, 0);
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
    let products = [];
    let images = [];
    let linkForAllProducts = "";
    let linkForAllAttachment = "";
    let ind = true;
    let currentPaht = window.location.pathname;
    if (this.props.name === "Wille") {
      products = ["265", "375", "465", "665", "865"];
      images = ["/Wille/265/masina1.png","/Wille/375/375_pose_thumb.png",
                "/Wille/465/465_pose_thumb.png","/Wille/665/665iv_pose_thumb_v2.png",
                "/Wille/865/865iv_pose_thumb.png"]; 
      linkForAllProducts = `/company/${this.props.name}/product`;
    } else if (this.props.name === "Broddson") {
      products = ["Nordic", "Scandia", "Fighter"];
      images = ["/Broddson/Nordic/masina3.png","/Broddson/Scandia/masina3.png", "/Broddson/Fighter/masina3.png"];
      ind = false;
    }
    linkForAllAttachment = `/company/${this.props.name}/attachments`;
    let pathToProducts = [];
    let pathToProductsMobile = [];
    for (let i = 0; i<products.length; i++) {
      let pathToProduct = `/company/${this.props.name}/product/${products[i]}`;
      pathToProducts.push(<li key={i}> <Link key={i} to={pathToProduct}> 
          <img className="machine_images" src={images[i]} alt="machine_logo"/> {this.props.name} {products[i]} </Link></li>);
      pathToProductsMobile.push(<li key={i}> <Link key={i} to={pathToProduct}> {this.props.name} {products[i]} </Link></li>);
    }

    return (
      <div>
      <div className="NB_css1">
        <nav>
          <ul >
            <li><Link to="/">{__('Home page')}</Link></li>
            <li className="firme"><Link to={linkForAllProducts}>{__('Products') }</Link>
              <ul>
                {pathToProducts}
              </ul>
            </li>
              {ind?<li className="li_posle_padajuceg"><Link to={linkForAllAttachment} className="nsk">{__('Attachments')}</Link></li>:<li className="li_posle_padajuceg"><Link to={currentPaht} className="nsk" style={{color:"black"}}>Nastavci</Link></li>}
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
            <li><a href="#companyList"> {__('Products')} </a>
              <ul>
              {pathToProductsMobile}
              </ul>
            </li>
            <div className="li_posle_padajuceg">
            {ind?<li className="li_posle_padajuceg"><Link to={linkForAllAttachment} className="nsk">{__('Attachments')}</Link></li>:<li className="li_posle_padajuceg"><Link to={currentPaht} className="nsk" style={{color:"black"}}>Nastavci</Link></li>}
          </div>
          </ul>
      </div>

      </div>
    );
    }
}

export default NB;