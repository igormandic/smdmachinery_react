import React, { Component } from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/SelectMenu.css';
import Header from './Header';
import NB from './NB';
import Homepage from './Homepage';


class SelectMenu extends Component {
  render(){
    return (
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
      <Tab eventKey="home" title="General info">
          <Header />
      </Tab>
      <Tab eventKey="profile" title="Technical info">
         <Homepage/>
      </Tab>
      <Tab eventKey="contact" title="After sale servise">
         <NB />
      </Tab>
      </Tabs>
    );
  }
}

export default SelectMenu;