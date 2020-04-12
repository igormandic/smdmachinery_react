import React, { Component } from 'react';
import '../css/AttachmentTab.css';


class AttachmentTab extends Component {
    render(){
      return (
        <div className="attachments">
          <div className="attachmentTab">
            <button className="b">
            <img src="/slika.jpeg" alt="Attachment" className="slika"/>
            </button>
            <button className="b">
            <img src="/slika.jpeg" alt="Attachment" className="slika"/>
            </button>
          </div>
          <div className="attachmentTab">
            <button className="b">
            <img src="/slika.jpeg" alt="Attachment" className="slika"/>
            </button>
            <button className="b">
            <img src="/slika.jpeg" alt="Attachment" className="slika"/>
            </button>
          </div>
        </div>
      );
    }
  }
  
  export default AttachmentTab;