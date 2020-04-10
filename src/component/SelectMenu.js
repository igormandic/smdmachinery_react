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
    let generalInfo = "The little giant of our streets is at home in environmental management tasks on the narrow streets and pathways, parking decks and urban parks. Thanks to being less than 2 metres in height, the machine fits easily to operate in multi-level car parks and the inner yards of blocks of flats. Do not let the small size deceive you – the Wille 265 can deal with even tough snow-clearing operations, and the cabin is spacious for its size and user-friendly. The machine has flow control of motor hydraulics as standard equipment, which eases the control of work attachments in various situations. The small Wille can work all year round ploughing, sweeping, cutting and collecting. For narrow streets or grass In addition to normal width, our smallest powerful machine is available as a narrow and a wide model. The narrowest model is only 1,200 mm in width, allowing it to plough snow even in narrow locations. The wide grass tyres make the machine particularly well-suited for lawn mowing, because wide tyres distribute the surface pressure on a larger area and make the machine more lawn friendly Drivetrain When working on an uneven surface or the grip under the tyres varies, you come to notice the differences between the way the machines behave when moving in challenging circumstances. As a machine that has mechanical drivetrain, the Wille is at its best on slippery surfaces. In wheel motors, traction control takes place using high-pressure hoses. The power is transmitted to the motors with a high-pressure hose: when the link bends in turns made when driving, the turns will also bend the hose and make it subject to mechanical strain and wearing. These, again, increase the risk that the hose is damaged while driving. The power is distributed evenly to all wheels, resulting improved tyre grip. Willes utilise mechanical drivetrain, in which the power is transmitted to the tyres through the axles, and not through the hose directed over the articulation link. The power is distributed evenly to all wheels, and the grip of the tyres is improved. Mechanical drivetrain is everyday business in large machines, but a rare capability in small-sized work machines. Our little giant, the Wille 265, is a genuine individual in its size category with mechanical drivetrain as standard feature Easy access to the engine compartment To make it easier for you to check the liquids of the engine compartment or to service your Wille, our machines come with an entirely new, entirely removable motor hood. It can be opened in three pieces (left, right, top), when necessary. After the service, the motor hood is just as easy to put back in its place. Easy access to the engine compartment shortens the time spent on the service and checks and frees time for productive work"
    return (
      <div className="selectMenu">
        <Tabs defaultActiveKey="generalInfo" id="uncontrolled-tab-example" className="tabovi">
          <Tab eventKey="generalInfo" title={__("General info")} >
            <GeneralInfo generalInfo={generalInfo}/>  
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