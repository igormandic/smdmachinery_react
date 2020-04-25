import React, { Component } from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import GeneralInfo from './GeneralInfo'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/SelectMenuAttachment.css';
import TechnicalInfoAttachment from './TechnicalInfoAttachment';
import Gallery from './Gallery';
import { __ } from '../utils/i18n';

class SelectMenuAttachment extends Component {
  render(){
    
    let title = [];
    let text = [];
    let list = [];
    let technicalInfoAttachment = [];
    let images = [];

    if (this.props.name === "1") {
      title = ["title 1 1"];
      text = ["text 1 1"];
      list = ["list 1 1","list 1 2","list 1 3","list 1 4","list 1 5","list 1 6","list 1 7","list 1 8"];
      images = ["/WILLE/Prikljucci/1/collectingsweeper650_w665_emptying_the_sweeper.jpg"]
    }
    else if(this.props.name === "2"){
      title = ["title 1 2"];
      text = ["text 1 2"];
      list = ["list 2 1","list 2 2"];
      images = ["/WILLE/Prikljucci/2/w465_wood_chipper.jpg"]
    }
    else if(this.props.name === "3"){
      title = ["title 1 3"];
      text = ["text 1 3"];
      list = ["list 3 1","list 3 2"];
      images = ["/WILLE/Prikljucci/3/865_wille_snowblower.jpg"]
    }
    else if(this.props.name === "4"){
      title = ["title 1 4"];
      text = ["text 1 4"];
      images = ["/WILLE/Prikljucci/4/access_platform_wille9_levelled_in_place.jpg"]
    }
    else if(this.props.name === "5"){
      title = ["title 1 5"];
      text = ["text 1 5"];
      list = ["list 5 1","list 5 2","list 5 3","list 5 4"];
      images = ["/WILLE/Prikljucci/5/W865iv_rear_blade_1_1600x1000.jpg"]
    }
    else if(this.props.name === "6"){
      title = ["title 1 6"];
      text = ["text 1 6"];
      images = ["/WILLE/Prikljucci/6/2006-06-14 16-22-18.jpg"]
    }
    else if(this.props.name === "7"){
      title = ["title 1 7"];
      text = ["text 1 7"];
      list = ["list 7 1","list 7 2"];
      images = ["/WILLE/Prikljucci/7/w365_snow_bucket.jpg"]
    }
     else if(this.props.name === "8"){
      title = ["title 1 8"];
      text = ["text 1 8"];
      list = ["list 8 1"];
      images = ["/WILLE/Prikljucci/8/W665_rotary_mower.jpg"]
    }
    else if(this.props.name === "9"){
      title = ["title 1 9"];
      text = ["text 1 9"];
      list = ["list 9 1","list 9 2","list 9 3"];
      images = ["/WILLE/Prikljucci/9/mfbucket1500_w665_in_action.jpg"]
    }
    else if(this.props.name === "10"){
      title = ["title 1 10"];
      text = ["text 1 10"];
      list = ["list 10 1","list 10 2","list 10 3"];
      images = ["/WILLE/Prikljucci/10/static_platform_w465.jpg"]
    }
    else if(this.props.name === "11"){
      title = ["title 1 8"];
      text = ["text 1 8"];
      list = ["list 11 1","list 11 2","list 11 3","list 11 4","list 11 5","list 11 6","list 11 7"];
      images = ["/WILLE/Prikljucci/11/discspreader_w465_rear_side_800x1000.jpg"]
    }
    else if(this.props.name === "12"){
      title = ["title 1 12"];
      text = ["text 1 12"];
      list = ["list 12 1","list 12 2","list 12 3"];
      images = ["/WILLE/Prikljucci/12/wille665iv_sand_spreader_tipping_550_1200x1000.jpg"]
    }
    else if(this.props.name === "13"){
      title = ["title 1 13"];
      text = ["text 1 13"];
      list = ["list 13 1","list 13 2","list 13 3","list 13 4","list 13 5","list 13 6","list 13 7"];
      images = ["/WILLE/Prikljucci/13/1500_de-icer_rear_image.jpg"]
    }
    else if(this.props.name === "14"){
      title = ["title 1 14"];
      text = ["text 1 14"];
      list = ["list 14 1","list 14 2","list 14 3","list 14 4"];
      images = ["/WILLE/Prikljucci/14/pressurewasher550_w265_in_action.jpg"]
    }
    else if(this.props.name === "15"){
      title = ["title 1 15"];
      text = ["text 1 15"];
      list = ["list 15 1","list 15 2","list 15 3"];
      images = ["/WILLE/Prikljucci/15/2006-03-13 12-34-12.jpg"]
    }
    else if(this.props.name === "16"){
      title = ["title 1 16"];
      text = ["text 1 16"];
      list = ["list 16 1","list 16 2"];
      images = ["/WILLE/Prikljucci/16/head_image.jpg"]
    }
    else if(this.props.name === "17"){
      title = ["title 1 15"];
      text = ["text 1 15"];
      list = ["list 17 1","list 17 2","list 17 3","list 17 4","list 17 5","list 17 6","list 17 7"];
      images = ["/WILLE/Prikljucci/17/rotarybrush200_w465_pose.jpg"]
    }
    else if(this.props.name === "18"){
      title = ["title 1 18"];
      text = ["text 1 18"];
      list = ["list 18 1","list 18 2","list 18 3","list 18 4"];
      images = ["/WILLE/Prikljucci/18/leaf_collector__W265_in_action1.jpg"]
    }
    else if(this.props.name === "19"){
      title = ["title 1 19"];
      text = ["text 1 19"];
      list = ["list 19 1","list 19 2","list 19 3",];
      images = ["/WILLE/Prikljucci/19/safety_mulcher_front_centered.jpg"]
    }
    else if(this.props.name === "20"){
      title = ["title 1 20"];
      text = ["text 1 20"];
      images = ["/WILLE/Prikljucci/20/boom_flail_mower_road_action.jpg"]
    }
    else if(this.props.name === "21"){
      title = ["title 1 21"];
      text = ["text 1 21"];
      list = ["list 21 1","list 21 2"];
      images = ["/WILLE/Prikljucci/21/bucket_pose.png"]
    }
    else if(this.props.name === "22"){
      title = ["title 1 22"];
      text = ["text 1 22"];
      list = ["list 22 1","list 22 2"];
      images = ["/WILLE/Prikljucci/22/plate_compactor_in_action2.jpg"]
    }
    else if(this.props.name === "23"){
      title = ["title 1 23"];
      text = ["text 1 23"];
      list = ["list 23 1","list 23 2"];
      images = ["/WILLE/Prikljucci/23/IMG_2889_0.jpg"]
    }

    return (
      <div className="selectMenuAttachment">
        <Tabs defaultActiveKey="generalInfo" id="uncontrolled-tab-example" className="tabovi">
          <Tab eventKey="generalInfo" title={__("General info")} >
            <GeneralInfo images={images} title={title} text={text} list={list} name={this.props.name} nameOfCompany={this.props.nameOfCompany}/>  
          </Tab>
          <Tab eventKey="technical" title="Technical info">
            <TechnicalInfoAttachment/>
          </Tab>
          <Tab eventKey="gallery" title="Gallery">
            <Gallery />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default SelectMenuAttachment;