import React from 'react';
import Header1 from './Header1';
import Footer from './Footer';
import Contact from './Contact';

class ContactPage extends React.Component {

  render() {
    return (
      <div className="ContactPage" style={{backgroundImage: "url('/Background.png')", backgroundAttachment: "fixed"}}>
          <Header1 type={"home"} numOfElement={6} />
          <Contact />
          <Footer />
      </div>
      );
  }
}

export default ContactPage;