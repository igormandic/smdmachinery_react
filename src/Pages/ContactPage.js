import React from 'react';
import './App.css';
// import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import NB from './component/NB';
import Contact from './component/Contact';

class ContactPage extends React.Component {

  render() {
    return (
      <div className="App">
          <Header/>
          <NB/>
          <Contact/>
          <Footer/>
      </div>
    );
  }
}
export default ContactPage;