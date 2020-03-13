import React, { Component } from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/SelectMenu.css';

class SelectMenu extends Component {
  render(){
    return (
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="General info">
        </Tab>
        <Tab eventKey="profile" title="Technical info">
        </Tab>
        <Tab eventKey="contact" title="After sale servise">
        </Tab>
      </Tabs>
    );
  }
}

export default SelectMenu;