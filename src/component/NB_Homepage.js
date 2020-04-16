import React, { Component } from 'react';
import {Nav, NavDropdown,} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/NB_Homepage.css';
import { Link } from 'react-router-dom';

class NB_Homepage extends Component {
render(){

    let navBar = [];
    let numbers = Array(this.props.numOfElement).fill(null).map( (x,i) => i );

    if (this.props.type === "home") {
      navBar = numbers.map((number) =>
        <NavDropdown.Item key={number.toString()}><Link to={{pathname:"/company", info:"sve sto treba za tu firmu"}}>Firma {number+1}</Link></NavDropdown.Item>
      );

      navBar = <NavDropdown title="Firme" id="basic-nav-dropdown" className = "dropDowns">{navBar}</NavDropdown>;
     
    } else {
      navBar = numbers.map((number) =>
        <NavDropdown.Item key={number.toString()}><Link to={{pathname:"/company/product", info:"sve sto treba za taj proizvod"}}>Firma {number+1}</Link></NavDropdown.Item>
      );
      navBar = <NavDropdown title="Firme" id="basic-nav-dropdown" className = "dropDowns">{navBar}</NavDropdown>;
    }

  return (
    <div>
    <div className="NB_css">
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
          <li className="firme"><a href="/company">Firme</a>
            <ul className="podlista">
              <li><a>Firma1</a></li>
              <li><a>Firma2</a></li>
              <li><a>Firma3</a></li>
              <li><a>Firma4</a></li>
            </ul>
          </li>
            <li><a className="nsk">Nastavci</a></li>
            <li><a className="nsk">Servis</a></li>
            <li><a className="nsk">Kontakt</a></li>
        </ul>
      </nav>
      </div>

       <div className="NB_response">
          <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/" className = "dropDowns">Pocetna</Nav.Link>
                {navBar}
                <Nav.Link href="/" className = "dropDowns">O nama</Nav.Link>
                <Nav.Link href="/" className = "dropDowns">Servis</Nav.Link>
                <Nav.Link href="/" className = "dropDowns">Kontakt</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
  }
}

export default NB_Homepage;