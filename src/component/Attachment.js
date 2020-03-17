import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class Attachment extends Component {
    render(){
      return (
          <div className="Attachment">
            <Header />
            <Footer />
        </div>
      );
    }
  }
  
  export default Attachment;