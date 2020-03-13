import React, { Component } from 'react';
import {Nav, NavDropdown,} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/NB.css';
import { Link } from 'react-router-dom'

class NB extends Component {
  render(){
    let navBar = [];
    let servis;
    let kontakt;
    if (this.props.type === "home") {
      for (let i = 0; i<this.props.numOfElement; i++) {
        navBar.push(<NavDropdown.Item><Link to={{pathname:"/company", info:"sve sto treba za tu firmu"}}>Firma {i+1}</Link></NavDropdown.Item>)
      }
      navBar = <NavDropdown title="Firme" id="basic-nav-dropdown" className = "dropDowns">{navBar}</NavDropdown>;
      servis = <Nav.Link className="dropDowns">Servis</Nav.Link>;
      kontakt = <Nav.Link className="dropDowns">Kontakt</Nav.Link>
    } else {
      for (let i = 0; i<this.props.numOfElement; i++) {
        navBar.push(<NavDropdown.Item><Link to={{pathname:"/company/product", info:"sve sto treba za proizvod"}}>Proizvod {i+1}</Link></NavDropdown.Item>)
      }
      navBar = <NavDropdown title="Proizvod" id="basic-nav-dropdown" className = "dropDowns">{navBar}</NavDropdown>;
    }

    return (
      <Navbar bg="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/" className = "clandropDownsoviNB">Pocetna</Nav.Link>
            {navBar}
            <NavDropdown title="Nastavci" id="basic-nav-dropdown" className = "dropDowns">
              <NavDropdown.Item>Action</NavDropdown.Item>
              <NavDropdown.Item>Another action</NavDropdown.Item>
              <NavDropdown.Item>Something</NavDropdown.Item>
            </NavDropdown>
          {servis}
          {kontakt}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}

export default NB;