import React from 'react';
import Header1 from './Header1';
import Footer from './Footer';
import AttachmentList from './AttachmentList';

class AllAttachments extends React.Component {

  render() {
    return (
      <div className="allProducts">
          <Header1 type="company" name="WILLE" />
          <AttachmentList />
          <Footer/>
      </div>
      );
  }

}

export default AllAttachments;