import React, { Component } from 'react';
import {Nav, NavDropdown,} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/NB.css';
import { Link } from 'react-router-dom'

class NB extends Component {

  render(){
    // let pathToProducts = `/company/${this.props.name}/265`;
    let products = [];
    let linkForAllProducts = "";
    if (this.props.name === "WILLE") {
      products = ["265", "375", "465", "665", "865"];
      linkForAllProducts = `/company/${this.props.name}/product`;
    }

    console.log(products);
    let pathToProducts = []
    for (let i = 0; i<products.length; i++) {
      let pathToProduct = `/company/${this.props.name}/product/${products[i]}`;
      pathToProducts.push(<li key={i}><Link key={i} to={pathToProduct}>{products[i]}</Link></li>)
    }

    let navBar = [];
      let numbers = Array(this.props.numOfElement).fill(null).map( (x,i) => i );

      if (this.props.type === "home") {
        navBar = numbers.map((number) =>
          <NavDropdown.Item key={number.toString()}><Link to={{pathname:"/company", info:"sve sto treba za tu firmu"}}>Proizvod {number+1}</Link></NavDropdown.Item>
        );

        navBar = <NavDropdown title="Proizvodi" id="basic-nav-dropdown" className = "dropDowns">{navBar}</NavDropdown>;
      } else {
        navBar = numbers.map((number) =>
          <NavDropdown.Item key={number.toString()}><Link to={{pathname:"/company/WILLE/product", info:"sve sto treba za taj proizvod"}}>Proizvod {number+1}</Link></NavDropdown.Item>
        );
        navBar = <NavDropdown title="Proizvod" id="basic-nav-dropdown" className = "dropDowns">{navBar}</NavDropdown>;
      }

    return (
      <div>
      <div className="NB_css1">
        <nav>
  {/* 
          <input type="checkbox" id="check"/>
          <label for="check" class="checkbtn">
          <img src="fa_bars.png" className="img_bars"></img>
          </label>

          <input type="checkbox" id="check1"/>
          <label for="check1" class="checkbtn1">
            <img src="fa_bars.png" className="img_bars"></img>
          </label> */}

          <ul>
            <li><a href="/">Pocetna</a></li>
            <li className="firme"><Link to={linkForAllProducts}>Proizvodi</Link>
              <ul className="podlista">
                {pathToProducts}
              </ul>
            </li>
              <li><a href="/#" className="nsk">Nastavci</a></li>
          </ul>
        </nav>
        </div>

        <div className="NB_response1">
            <Navbar expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto1">
                  <Nav.Link href="/" className = "dropDowns">Pocetna</Nav.Link>
                  {navBar}
                  <Nav.Link href="/" className = "dropDowns">Nastavci</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    );
    }
}

export default NB;