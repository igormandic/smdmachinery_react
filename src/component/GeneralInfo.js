import React, { Component } from 'react';
import '../css/GeneralInfo.css'

class GeneralInfo extends Component {
    render(){
      return (
          <div className="generalInfo">
            <div className="text">
              <h2 className="title">The little giant</h2>
              {this.props.generalInfo}
            </div>
            <img src="/WILLE/265/masina2.jpg" className="photoGeneral" alt="WILLE 256"></img>
         </div>
      );
    }
  }
  
  export default GeneralInfo;