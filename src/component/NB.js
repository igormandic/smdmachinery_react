import React from 'react';
import {Nav, NavDropdown,} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/NB.css';


function NB() {
    return (
      <Navbar bg="dark" expand="lg">
  <Navbar.Brand href="App.js" className="desnaStrana">SMDMACHINERY</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="App.js" className = "clanoviNB">Pocetna</Nav.Link>
      <NavDropdown title="Firme" id="basic-nav-dropdown" className = "clanoviNB">
        <NavDropdown.Item href="App.js">Action</NavDropdown.Item>
        <NavDropdown.Item href="App.js">Another action</NavDropdown.Item>
        <NavDropdown.Item href="App.js">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="App.js">Separated link</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Nastavci" id="basic-nav-dropdown" className = "clanoviNB">
        <NavDropdown.Item href="App.js">Action</NavDropdown.Item>
        <NavDropdown.Item href="App.js">Another action</NavDropdown.Item>
        <NavDropdown.Item href="App.js">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="App.js">Separated link</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="App.js"  className = "clanoviNB">Servis</Nav.Link>
      <Nav.Link href="App.js"  className = "clanoviNB">Kontakt</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
}

export default NB;