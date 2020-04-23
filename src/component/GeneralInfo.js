import React, { Component } from 'react';
import '../css/GeneralInfo.css'
import { __ } from '../utils/i18n';

class GeneralInfo extends Component {
  
  render(){
    const nameOfProduct = `${this.props.nameOfCompany} ${this.props.name}`
    const title = this.props.title;
    const text = this.props.text;
    let generalInfo = [];

    for (let i = 0; i<title.length; i++) {
      generalInfo.push(
        <div key={i}>
          <h3>{__(title[i])}</h3>
          <br />
          <p>{__(text[i])}</p>
          <br />
        </div>
      );
    }
    let images = [];
    for (let i = 0; i<this.props.images.length; i++) {
      let className=`photoGeneral${i+1}`
      images.push(<img key={i} src={this.props.images[i]} className={className} alt={nameOfProduct}></img>)
    }
      return (
          <div className="generalInfo">
            <div className="text">
              <h2 className="title">{nameOfProduct}</h2>
              {generalInfo}
            </div>
            <div className="right">
              {images}
            </div>
         </div>
      );
    }
  }
  
  export default GeneralInfo;