import React, { Component } from 'react';
import '../css/GeneralInfo.css'

class GeneralInfo extends Component {
    render(){
      return (
          <div className="generalInfo">
            {this.props.generalInfo}
         </div>
      );
    }
  }
  
  export default GeneralInfo;