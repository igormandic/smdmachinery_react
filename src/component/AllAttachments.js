import React from 'react';
import Header1 from './Header1';
import Footer from './Footer';
import AttachmentList from './AttachmentList';
import '../css/AllAttachments.css'

class AllAttachments extends React.Component {

  render() {
    let attachments = [];
    for (let i = 1; i<=23; i++) {
      attachments.push(i);
    }
    return (
      <div >
          <Header1 type="company" name="WILLE" />
          <div className="allAttachment">
            <AttachmentList attachments={attachments}/>
          </div>
          <Footer/>
      </div>
      );
  }

}

export default AllAttachments;