import React, { Component } from 'react';
import AttachmentList from './AttachmentList';

class AttachmentTab extends Component {
    render(){
      return (
        <div>
          <AttachmentList attachments={this.props.attachments} />
        </div>
      );
    }
  }
  
  export default AttachmentTab;