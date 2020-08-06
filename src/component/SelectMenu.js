import React, { Component } from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import GeneralInfo from './GeneralInfo'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/SelectMenu.css';
import TechnicalInfo from './TechnicalInfo';
import AttachmentTab from './AttachmentTab';
import Gallery from './Gallery';
import { __ } from '../utils/i18n';
// import GeneralInfoWille from './GeneralInfoWille';

class SelectMenu extends Component {
  render(){
    let title = [];
    let text = [];
    let list =[];
    let technicalInfo = [];
    let pdf = `/${this.props.nameOfCompany}/${this.props.name}/brosura.pdf`;
    let images = [];
    let attachments = [];
      if (this.props.name === "265") {
        title = ["title 1 265", "title 2 265", "title 3 265", "title 4 265"];
        text = ["text 1 265", "text 2 265", "text 3 265", "text 4 265"];
        technicalInfo = { 
          engine: "CAT C2.2",
          output: "36 kW/48 hp",
          liftingForce: "12/13 kN",
          liftingHeiht: "705 mm",
          maxMotor: ["54 + 36l/min", "90 l/min"],
          tyres: ["235/75-15","31x10, 5-15", "31x15, 5-15"],
          width: "1200/1300 mm",
          length: "3255 mm",
          height: "1990 mm",
          wheelbase: "1490 mm",
          outerTurning: "3000 mm",
          weight: "1900 kg",
          drivingSpeed: "0-36 kmph"
        };
        images = ["/Wille/265/masina2.jpg"];
        attachments = [10, 11, 12, 14, 15, 16, 17, 18, 23];
      } else if (this.props.name === "375") {
        title = ["title 1 375", "title 2 375", "title 3 375", "title 4 375", "title 5 375", "title 6 375", "title 7 375", "title 8 375", "title 9 375"];
        text = ["text 1 375", "text 2 375", "text 3 375", "text 4 375", "text 5 375", "text 6 375", "text 7 375", "text 8 375", "text 9 375"];
        technicalInfo = { 
          engine: "Kohler KDI 1903 TCR",
          output: "42 kW/56 hp",
          liftingForce: "7.4/17.7 kN",
          liftingHeiht: "2735 mm",
          maxMotor: ["0-55 + 35 + 20l/min", "110 l/min"],
          tyres: ["31*15.5-15"],
          width: "1430 mm",
          length: "4135 mm",
          height: "2090 mm",
          wheelbase: "1955 mm",
          outerTurning: "3570 mm",
          weight: "2920 kg",
          drivingSpeed: "0-38 kmph"
        };
        images = ["/Wille/375/AED_fuelsave_symbol_0.png", "/Wille/375/AED_settings_photo.jpg", "/Wille/375/375_loader_up.jpg"];
        attachments = [1, 4, 7, 9, 10, 11, 12, 14, 15, 16, 17, 18, 21, 23];

      } else if (this.props.name === "465") {
        title = ["title 1 465", "title 2 465", "title 3 465", "title 4 465", "title 5 465", "title 6 465", "title 7 465", "title 8 465", "title 9 465", "title 10 465", "title 11 465", "title 12 465"];
        text = ["text 1 465", "text 2 465", "text 3 465", "text 4 465", "text 5 465", "text 6 465", "text 7 465", "text 8 465", "text 9 465", "text 10 465", "text 11 465", "text 12 465"];
        technicalInfo = { 
          engine: "Kohler KDI 2504 TCR",
          output: "55.4 kW/74.3 hp",
          liftingForce: "11.6/24.7 kN",
          liftingHeiht: "2800 mm",
          maxMotor: ["0-80 + 52l/min", "132 l/min"],
          tyres: ["305/70R16", "380/60R15"],
          width: "1655 mm",
          length: "4270 mm",
          height: "2175 mm",
          wheelbase: "2090 mm",
          outerTurning: "3750 mm",
          weight: "3420 kg",
          drivingSpeed: "0-40 kmph"
        };
        images = ["/Wille/465/information.jpg", "/Wille/465/kohler_0.jpg", "/Wille/465/machine-gallery.jpg"];
        attachments = [1, 6, 7, 9, 10, 11, 12, 14, 15, 16, 17, 18, 21, 23];

      } else if (this.props.name === "665") {
        title = ["title 1 665", "title 2 665", "title 3 665", "title 4 665", "title 5 665", "title 6 665", "title 7 665", "title 8 665", "title 9 665", "title 10 665", "title 11 665", "title 12 665", "title 13 665", "title 14 665", "title 15 665"];
        text = ["text 1 665", "text 2 665", "text 3 665", "text 4 665", "text 5 665", "text 6 665", "text 7 665", "text 8 665", "text 9 665", "text 10 665", "text 11 665", "text 12 665", "text 13 665", "text 14 665", "text 15 665"];
        technicalInfo = { 
          engine: "Kohler KDI 3404 TCR-SCR",
          output: "100 kW/136 hp",
          liftingForce: "30.2/41 kN",
          liftingHeiht: "3380 mm",
          maxMotor: ["0-145 + 55l/min", "200 l/min"],
          tyres: ["420/65R24", "360/80R20"],
          width: "1750/1920 mm",
          length: "5115 mm",
          height: "2340 mm",
          wheelbase: "2415 mm",
          outerTurning: "4340 mm",
          weight: "5920 kg",
          drivingSpeed: "0-50 kmph"
        };
        images = ["/Wille/665/information.jpg", "/Wille/665/kohler_scr_3404.jpg", "/Wille/665/W665iv_studio_front.jpg"]
        attachments = [1, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 16, 17, 21];

      } else if (this.props.name === "865") {
        title = ["title 1 865", "title 2 865", "title 3 865", "title 4 865", "title 5 865", "title 6 865", "title 7 865", "title 8 865", "title 9 865", "title 10 865", "title 11 865", "title 12 865", "title 13 865", "title 14 865", "title 15 865"];
        text = ["text 1 865", "text 2 865", "text 3 865", "text 4 865", "text 5 865", "text 6 865", "text 7 865", "text 8 865", "text 9 865", "text 10 865", "text 11 865", "text 12 865", "text 13 865", "text 14 865", "text 15 865"];
        technicalInfo = { 
          engine: "Kohler KDI 3404 TCR-SCR",
          output: "100 kW/136 hp",
          liftingForce: "42.5/65.8 kN",
          liftingHeiht: "3740 mm",
          maxMotor: ["0-145 + 55l/min", "200 l/min"],
          tyres: ["4260/65R24", "500/60R22.5"],
          width: "2150 mm",
          length: "5480 mm",
          height: "2490 mm",
          wheelbase: "2675 mm",
          outerTurning: "4800 mm",
          weight: "7050 kg",
          drivingSpeed: "0-50 kmph"
        };
        images = ["/Wille/865/information.jpg", "/Wille/865/kohler_scr_3404.jpg", "/Wille/865/masina.jpg"]
        attachments = [1, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 17, 21];

      }

    return (
      <div className="selectMenu">
        <Tabs defaultActiveKey="generalInfo" id="uncontrolled-tab-example" className="tabovi">
          <Tab eventKey="generalInfo" title={__("General info")} >
            <GeneralInfo ind={true} images={images} title={title} text={text} list={list} name={this.props.name} nameOfCompany={this.props.nameOfCompany}/>  
          </Tab>
          <Tab eventKey="technical" title={__('Technical info')}>
            <TechnicalInfo pdf={pdf} technicalInfo={technicalInfo} name={this.props.name} nameOfCompany={this.props.nameOfCompany} />
          </Tab>
          <Tab eventKey="attachment" title={__('Attachments')}>
            <AttachmentTab attachments={attachments}/>
          </Tab>
          <Tab eventKey="gallery" title={__('Gallery')}>
            <Gallery name={this.props.name} nameOfCompany={this.props.nameOfCompany}/>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default SelectMenu;