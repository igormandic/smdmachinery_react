import React, { Component } from 'react';
import Header1 from './Header1';
import Footer from './Footer';
import SelectMenuAttachment from './SelectMenuAttachment';

class Attachment extends Component {
    render(){
      return (
          <div className="Attachment">
             <Header1 type="company" name="WILLE" />
            <SelectMenuAttachment />
            <Footer />
        </div>
      );
    }
  }
  
  export default Attachment;