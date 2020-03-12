import React, { Component } from 'react';
import {Nav, NavDropdown,} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/NB.css';

class NB extends Component {
  render(){
    return (
      <Navbar bg="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="App.js" className = "clandropDownsoviNB">Pocetna</Nav.Link>
            <NavDropdown title="Firme" id="basic-nav-dropdown" className = "dropDowns">
              <NavDropdown.Item href="App.js">Action</NavDropdown.Item>
              <NavDropdown.Item href="App.js">Another action</NavDropdown.Item>
              <NavDropdown.Item href="App.js">Something</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Nastavci" id="basic-nav-dropdown" className = "dropDowns">
              <NavDropdown.Item href="App.js">Action</NavDropdown.Item>
              <NavDropdown.Item href="App.js">Another action</NavDropdown.Item>
              <NavDropdown.Item href="App.js">Something</NavDropdown.Item>
            </NavDropdown>
          <Nav.Link href="App.js"  className = "dropDowns">Servis</Nav.Link>
          <Nav.Link href="App.js"  className = "dropDowns">Kontakt</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}

export default NB;