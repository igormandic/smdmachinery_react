import React, { Component } from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import GeneralInfo from './GeneralInfo'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/SelectMenu.css';
import TechnicalInfo from './TechnicalInfo';
import AttachmentTab from './AttachmentTab';
import Gallery from './Gallery';

class SelectMenu extends Component {
  render(){
    return (
      <div className="selectMenu">
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="General info">
            <GeneralInfo />
          </Tab>
          <Tab eventKey="technical" title="Technical info">
            <TechnicalInfo />
          </Tab>
          <Tab eventKey="attachment" title="Attachment">
            <AttachmentTab />
          </Tab>
          <Tab eventKey="gallery" title="Gallery">
            <Gallery />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default SelectMenu;