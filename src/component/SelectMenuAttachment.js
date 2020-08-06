import React, { Component } from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import GeneralInfo from './GeneralInfo'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/SelectMenuAttachment.css';
import TechnicalInfoAttachment from './TechnicalInfoAttachment';
import GalleryAttachment from './GalleryAttachment';
import { __ } from '../utils/i18n';

class SelectMenuAttachment extends Component {
  render(){
    
    let title = [];
    let text = [];
    let list = [];
    let technicalInfoAttachment = [];
    let images = [];
    let pdf = '';

    if (this.props.name === '1') {
      title = ['title 1 1'];
      text = ['text 1 1'];
      list = ['list 1 1','list 1 2','list 1 3','list 1 4','list 1 5','list 1 6','list 1 7','list 1 8'];
      images = ['/Wille/Prikljucci/1/masina1.jpg'];
      technicalInfoAttachment = [
        ['', 'Volume (l)', 'Water tank volume (l)', 'Working width (mm)', 'Brush diameter (mm)', 'Weight (kg)', 'Wille'],
        ['Collecting sweeper 205', '200', '100', '1700, with extra cup brush 2050', '600', '525', '365'],
        ['Collecting sweeper 305', '200', '100', '2050, with extra cup brush 2500', '600', '560', '465'],
        ['Collecting sweeper 650', '200', '100', '2250, with extra cup brush 2700', '700', '790', '665, 865']
      ];
    } else if (this.props.name === '2') {
      title = ['title 1 2'];
      text = ['text 1 2'];
      list = ['list 2 1','list 2 2'];
      images = ['/Wille/Prikljucci/2/masina1.jpg'];
    } else if (this.props.name === '3') {
      title = ['title 1 3'];
      text = ['text 1 3'];
      list = ['list 3 1','list 3 2'];
      images = ['/Wille/Prikljucci/3/masina1.jpg']
    } else if (this.props.name === '4') {
      title = ['title 1 4'];
      text = ['text 1 4'];
      images = ['/Wille/Prikljucci/4/masina3.jpg'];
      technicalInfoAttachment = [
        ['Working height (mm)', '8800'],
        ['Platform floor from the ground (mm)', '6800'],
        ['Outreach to the side (mm)', '5700'],
        ['Swing angle of the boom (degrees)', '± 70°'],
        ['Platform load (kg)', '120 (1 person + 40)'],
        ['Platform dimensions (mm)', '820 x 740 '],
        ['Weight (kg)', '720'],
        ['Compatibility', '365, 465, 665, 865 *']
      ];
    } else if (this.props.name === '5') {
      title = ['title 1 5'];
      text = ['text 1 5'];
      list = ['list 5 1','list 5 2','list 5 3','list 5 4'];
      images = ['/Wille/Prikljucci/5/masina3.jpg'];
      technicalInfoAttachment = [
        ['', 'Blade width (mm)', 'Blade angle +/-', 'Blade tilt +/-', 'Weight (kg)', 'Wille'],
        ['Hydraulic rear blade 2500', '2500', '25°', '10°', '450', '665, 865']
      ]
    } else if (this.props.name === '6') {
      title = ['title 1 6'];
      text = ['text 1 6'];
      images = ['/Wille/Prikljucci/6/masina1.jpg'];
      technicalInfoAttachment = [
        ['', 'Volume (liters)', 'Working width (mm)', 'Weight (kg)', 'Wille'],
        ['Leaf bucket 1200', '1200', '1950', '455', '465'],
        ['Leaf bucket 1200', '1900', '2300', '615', '655, 865']
      ]
    } else if (this.props.name === '7') {
      title = ['title 1 7'];
      text = ['text 1 7'];
      list = ['list 7 1','list 7 2'];
      images = ['/Wille/Prikljucci/7/masina1.jpg'];
      technicalInfoAttachment = [
        ['', 'Volume (liters)', 'Working width (mm)', 'Weight (kg)', 'Wille'],
        ['Snow bucket 800', '800', '1550', '220', '365'],
        ['Snow bucket 1200', '1200', '1950', '285', '465'],
        ['Snow bucket 1800', '1900', '2300', '425', '665'],
        ['Snow bucket 2500', '2500', '2450', '510', '865']
      ];
    } else if (this.props.name === '8') {
      title = ['title 1 8'];
      text = ['text 1 8'];
      list = ['list 8 1'];
      images = ['/Wille/Prikljucci/8/masina1.jpg'];
    } else if (this.props.name === '9') {
      title = ['title 1 9'];
      text = ['text 1 9'];
      list = ['list 9 1','list 9 2','list 9 3'];
      images = ['/Wille/Prikljucci/9/masina1.jpg'];
      technicalInfoAttachment = [
        ['', 'Volume (liters)', 'Min. Working width (mm)', 'Max. Working width (mm)', 'Weight (kg)', 'Wille'],
        ['Multi-functional Bucket 750', '750', '1720', '2685', '290', '365'],
        ['Multi-functional Bucket 1000', '1000', '1825', '3000', '385', '465'],
        ['Multi-functional Bucket 1500', '1500', '2100', '3590', '575', '665'],
        ['Multi-functional Bucket 2000', '2000', '2500', '4000', '685', '865']
      ];
    } else if (this.props.name === '10') {
      title = ['title 1 10'];
      text = ['text 1 10'];
      list = ['list 10 1','list 10 2','list 10 3'];
      images = ['/Wille/Prikljucci/10/masina3.jpg'];
      technicalInfoAttachment = [
        ['', 'Volume (liters)', 'Lenght (mm)', 'Width (mm)', 'Board height (mm)', 'Weight (kg)', 'Wille'],
        ['Hydraulic Platform 300', '300', '1250', '1130', '220', '250', '465'],
        ['Hydraulic Platform 800', '800', '1600', '1400', '350', '400', '665, 865'],
        ['Platform 230', '230', '1130', '1040', '200', '65', '265, 365'],
        ['Platform 270', '270', '1250', '1090', '200', '85', '465']
      ];
    } else if (this.props.name === '11') {
      title = ['title 1 11'];
      text = ['text 1 11'];
      list = ['list 11 1','list 11 2','list 11 3','list 11 4','list 11 5','list 11 6','list 11 7'];
      images = ['/Wille/Prikljucci/11/masina1.jpg'];
      technicalInfoAttachment = [
        ['', 'Volume (liters)', 'Weight (kg)', 'Wille'],
        ['Disc Spreader 450', '450', '285', '265, 365'],
        ['Disc Spreader 700', '700', '506', '465'],
        ['Disc Spreader 1000', '1000', '530', '665, 865']
      ];
    } else if (this.props.name === '12') {
      title = ['title 1 12'];
      text = ['text 1 12'];
      list = ['list 12 1','list 12 2','list 12 3'];
      images = ['/Wille/Prikljucci/12/masina1.jpg'];
      technicalInfoAttachment = [
        ['', 'Volume (liters)', 'Working width (mm)', 'Weight (kg)', 'Wille'],
        ['Sand spreader 180', '180', '1100', '215', '265'],
        ['Sand spreader 250', '250', '1100', '210', '365'],
        ['Sand spreader 370', '370', '1400', '275', '465'],
        ['Sand spreader 550 fixed', '550', '1700', '330', '665'],
        ['Sand spreader 550 tipping', '550', '1700', '425', '665'],
        ['Sand spreader 700 fixed', '700', '1950', '530', '865'],
        ['Sand spreader 700 tipping', '700', '1950', '625', '865']
      ];
    } else if (this.props.name === '13') {
      title = ['title 1 13'];
      text = ['text 1 13'];
      list = ['list 13 1','list 13 2','list 13 3','list 13 4','list 13 5','list 13 6','list 13 7'];
      images = ['/Wille/Prikljucci/13/masina1.jpg'];
      technicalInfoAttachment = [
        ['', 'Volume (liters)', 'Working width (mm)', 'Spread amount (g/m2)', 'Spreading speed (km/h)', 'Wille'],
        ['De-icer 1500', '1500', '2500-5000', '455', 'max. 30', '655, 865']
      ];
    } else if (this.props.name === '14') {
      title = ['title 1 14'];
      text = ['text 1 14'];
      list = ['list 14 1','list 14 2','list 14 3','list 14 4'];
      images = ['/Wille/Prikljucci/14/masina3.jpg'];
      technicalInfoAttachment = [
        ['', 'Volume (liters)', 'Max. Pressure (bar)', 'Max pump flow (l/min)', 'Weight (kg)', 'Wille'],
        ['High-pressure washer 550', '550', '130', '30', '230', '265, 365'],
        ['High-pressure washer 1000', '1000', '150', '45', '435', '455B, 465'],
        ['High-pressure washer 1500', '1500', '150', '90', '635', '665, 865']
      ];
    } else if (this.props.name === '15') {
      title = ['title 1 15'];
      text = ['text 1 15'];
      list = ['list 15 1','list 15 2','list 15 3'];
      images = ['/Wille/Prikljucci/15/masina1.jpg'];
      technicalInfoAttachment = [
        ['', 'Width (mm)', 'Height (mm)', 'Blade (mm)', 'Hydraulic turn +/-', 'Weight (kg)', 'Wille'],
        ['Ice plow', '3000', '420', '2 x 100', '30°', '205', '265, 365, 465']
      ];
    } else if (this.props.name === '16') {
      title = ['title 1 16'];
      text = ['text 1 16'];
      list = ['list 16 1','list 16 2'];
      images = ['/Wille/Prikljucci/16/masina1.jpg'];
      technicalInfoAttachment = [
        ['', 'Volume (liters)', 'Max. Pressure (bar)', 'Max. Flow (l/min)', 'Powered', 'Weight (kg)', 'Wille'],
        ['Sprinkling tank 550', '550', '3,1', '14', 'electricity (12V)', '220', '265, 365'],
        ['Sprinkling tank 1000', '1000', '2,8', '13', 'electricity (12V)', '350', '465'],
        ['Sprinkling tank 1500', '1500', '3,1', '14', 'electricity (12V)', '410', '665, 865']
      ];
    } else if (this.props.name === '17') {
      title = ['title 1 17'];
      text = ['text 1 17'];
      list = ['list 17 1','list 17 2','list 17 3','list 17 4','list 17 5','list 17 6','list 17 7'];
      images = ['/Wille/Prikljucci/17/masina1.jpg'];
      technicalInfoAttachment = [
        ['', 'Min. Working width (mm)', 'Max. Working width (mm)', 'Weight (kg)', 'Wille'],
        ['Rotary brush 140', '1250', '1400', '320', '265'],
        ['Rotary brush 170', '1515', '1700', '400', '365'],
        ['Rotary brush 200', '1780', '2000', '450', '465'],
        ['Rotary brush 240', '2040', '2400', '480', '665, 865'],
        ['Rotary brush 270', '2400', '2700', '510', '665, 865'],
        ['Rotary brush 320', '2850', '3200', '560', '865']
      ];
    } else if (this.props.name === '18') {
      title = ['title 1 18'];
      text = ['text 1 18'];
      list = ['list 18 1','list 18 2','list 18 3','list 18 4'];
      images = ['/Wille/Prikljucci/18/masina3.jpg'];
      technicalInfoAttachment = [
        ['', 'Volume (l)', 'Unloading height (mm)', 'Weight (kg)', 'Wille'],
        ['Leaf collector/blower 900', '900', '1850', '555', '265, 365'],
        ['Leaf collector/blower 1000', '1000', '1900', '655', '465']
      ];
    } else if (this.props.name === '19') {
      title = ['title 1 19'];
      text = ['text 1 19'];
      list = ['list 19 1','list 19 2','list 19 3',];
      images = ['/Wille/Prikljucci/19/masina3.jpg']
    } else if (this.props.name === '20') {
      title = ['title 1 20'];
      text = ['text 1 20'];
      images = ['/Wille/Prikljucci/20/masina1.jpg'];
    } else if (this.props.name === '21') {
      title = ['title 1 21'];
      text = ['text 1 21'];
      list = ['list 21 1','list 21 2'];
      images = ['/Wille/Prikljucci/21/masina2.jpg'];
      technicalInfoAttachment = [
        ['', 'Volume (liters)', 'Working width (mm)', 'Weight (kg)', 'Wille'],
        ['Soil bucket 400', '400', '1400', '155', '365'],
        ['Soil bucket 600', '600', '1700', '215', '465'],
        ['Soil bucket 1000', '1000', '2100', '365', '665'],
        ['Soil bucket 1300', '1300', '2300', '450', '865']
      ];
    } else if (this.props.name === '22') {
      title = ['title 1 22'];
      text = ['text 1 22'];
      list = ['list 22 1','list 22 2'];
      images = ['/Wille/Prikljucci/22/masina3.jpg'];
    } else if (this.props.name === '23') {
      title = ['title 1 23'];
      text = ['text 1 23'];
      list = ['list 23 1','list 23 2'];
      images = ['/Wille/Prikljucci/23/masina1.jpg'];
      technicalInfoAttachment = [
        ['', 'Volume (liters)', 'Working width (mm)', 'Emptying height (mm)', 'Weight (kg)', 'Wille'],
        ['HT-bucket 550', '550', '1580', '1000 (265) 3130 (365)', '300', '265, 365'],
        ['HT-bucket 800', '800', '2700', '3400', '400', '465']
      ];
    } else if (this.props.name === 'Nordic')  {
      title = ['title 1 Nordic'];
      text = ['text 1 Nordic'];
      technicalInfoAttachment = [
        ['Length', '4.570 mm'],
        ['Width', '1.870 mm'],
        ['Height', '2.260 mm'],
        ['Sweeping width', '2.300-2.800 mm'],
        ['Capacity', 'Max 30 liter/min'],
        ['Tires', '225/75 x 17.5']
      ];
      images = ['/Broddson/Nordic/masina.jpg'];
      pdf = '/Broddson/Nordic/brosura.pdf';
    } else if (this.props.name === 'Scandia')  {
      title = ['title 1 Scandia'];
      text = ['text 1 Scandia'];
      technicalInfoAttachment = [
        ['Length', '6.660 mm'],
        ['Width, exkl. sidebrush', '2.260 mm'],
        ['Height', '3.550 mm'],
        ['Sweeping width', '2.500-3.000 mm'],
        ['Engine', 'John Deere or Perkins'],
        ['Tires', '225/75R 17.5'],
        ['Speed', 'Max 40 km/h']
      ];
      images = ['/Broddson/Scandia/masina.jpg'];
      pdf = '/Broddson/Scandia/brosura.pdf';	
    } else if (this.props.name === 'Fighter')  {
      title = ['title 1 Fighter'];
      text =  ['text 1 Fighter'];
      images = ['/Broddson/Fighter/masina1.png'];
      pdf = '/Broddson/Fighter/brosura.pdf';	
    }
    return (
      <div className='selectMenuAttachment'>
        <Tabs defaultActiveKey='generalInfo' id='uncontrolled-tab-example' className='tabovi'>
          <Tab eventKey='generalInfo' title={__('General info')} >
            <GeneralInfo ind={false} images={images} title={title} text={text} list={list} name={this.props.name} nameOfCompany={this.props.nameOfCompany}/>  
          </Tab>
          <Tab eventKey='technical' title={__('Technical info')}>
            <TechnicalInfoAttachment technicalInfoAttachment={technicalInfoAttachment} pdf={pdf}/>
          </Tab>
          <Tab eventKey='gallery' title={__('Gallery')}>
            <GalleryAttachment name={this.props.name} nameOfCompany={this.props.nameOfCompany}/>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default SelectMenuAttachment;