import React, { Component } from 'react';
import '../css/GeneralInfoWille.css'
import { __ } from '../utils/i18n';

class GeneralInfoWille extends Component {
  
  render(){
    const nameOfProduct = `${this.props.nameOfCompany} ${this.props.name}`
    const title = this.props.title;
    const text = this.props.text;
    const list = this.props.list;
    let generalInfo = [];
    let listInfo = [];

    for(let i=0; i<list.length;i++){
      listInfo.push(
          <li key={i}>
            {__(list[i])}
          </li>
      )
    }

    listInfo= [<ul key={100}  className="listInfo">{listInfo}</ul>]

    for (let i = 0; i<title.length; i++) {
      generalInfo.push(
        <div key={i}>
          <h3>{__(title[i])}</h3>
          <br />
          <p>{__(text[i])}</p>
          <br/>
          {listInfo}
          <br />
        </div>
      );
    }
      return (
          <div className="generalInfo">
            <div className="textGeneralInfo">
              {this.props.ind ? <h2 className="title">{nameOfProduct}</h2> : ""}
              {generalInfo}
            </div>
         </div>
      );
    }
  }
  
  export default GeneralInfoWille;