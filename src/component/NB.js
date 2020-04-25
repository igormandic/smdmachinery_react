import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/NB.css';
import { Link } from 'react-router-dom';
import { __ } from '../utils/i18n';


class NB extends Component {

  render(){
    let products = [];
    let images = [];
    let linkForAllProducts = "";
    let linkForAllAttachment = "";
    if (this.props.name === "WILLE") {
      products = ["265", "375", "465", "665", "865"];
      images = ["/WILLE/265/masina1.png","/WILLE/375/375_pose_thumb.png",
                "/WILLE/465/465_pose_thumb.png","/WILLE/665/665iv_pose_thumb_v2.png",
                "/WILLE/865/865iv_pose_thumb.png"];
      linkForAllProducts = `/company/${this.props.name}/product`;
    } else if (this.props.name === "Broddson") {
      products = ["Nordic", "Scandia"];
      images = ["/Broddson/Nordic/masina3.png","/Broddson/Scandia/masina3.png"];
    }

    linkForAllAttachment = `/company/${this.props.name}/attachments`
    let pathToProducts = []
    for (let i = 0; i<products.length; i++) {
      let pathToProduct = `/company/${this.props.name}/product/${products[i]}`;
      pathToProducts.push(<li key={i}> <Link key={i} to={pathToProduct}> 
          <img className="machine_images" src={images[i]} alt="machine_logo"/> <br />{this.props.name} {products[i]} </Link></li>)
    }

    return (
      <div>
      <div className="NB_css1">
        <nav>

        <input type="checkbox" id="check"/>
        <label for="check" class="checkbtn">
        <img src="/fa_bars.png" className="img_bars" alt="fa_bars"></img>
        </label>

          <ul>
            <li><a href="/">{__('Home page')}</a></li>
            <li className="firme"><Link to={linkForAllProducts}>Proizvodi</Link>
              <ul>
                {pathToProducts}
              </ul>
            </li>
              <li className="li_posle_padajuceg"><a href={linkForAllAttachment} className="nsk">Nastavci</a></li>
          </ul>
        </nav>
        </div>

      </div>
    );
    }
}

export default NB;