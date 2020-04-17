import React, { Component } from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import GeneralInfo from './GeneralInfo'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/SelectMenu.css';
import TechnicalInfo from './TechnicalInfo';
import AttachmentTab from './AttachmentTab';
import Gallery from './Gallery';
import { __ } from '../utils/i18n';

class SelectMenu extends Component {
  render(){
    let generalInfo = "The little giant of our streets is at home in environmental management tasks on the narrow streets and pathways, parking decks and urban parks. Thanks to being less than 2 metres in height, the machine fits easily to operate in multi-level car parks and the inner yards of blocks of flats. Do not let the small size deceive you – the Wille 265 can deal with even tough snow-clearing operations, and the cabin is spacious for its size and user-friendly. The machine has flow control of motor hydraulics as standard equipment, which eases the control of work attachments in various situations. The small Wille can work all year round ploughing, sweeping, cutting and collecting."
    return (
      <div className="selectMenu">
        <Tabs defaultActiveKey="generalInfo" id="uncontrolled-tab-example" className="tabovi">
          <Tab eventKey="generalInfo" title={__("General info")} >
            <GeneralInfo generalInfo={generalInfo}/>  
          </Tab>
          <Tab eventKey="technical" title="Technical info">
            <TechnicalInfo name={this.props.name} nameOfCompany={this.props.nameOfCompany} />
          </Tab>
          <Tab eventKey="attachment" title="Attachment">
            <AttachmentTab />
          </Tab>
          <Tab eventKey="gallery" title="Gallery">
            <Gallery name={this.props.name} nameOfCompany={this.props.nameOfCompany}/>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default SelectMenu;