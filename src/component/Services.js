import React from 'react';
import Header1 from './Header1';
import Footer from './Footer';
import '../css/Services.css'; 
import { __ } from '../utils/i18n';

class AboutUs extends React.Component {

  render() {
    return (
      <div className="">
        <Header1 type="home"/>
            <div className="services">
            <img src="/logo.png" alt="SMDMachinery" id="logoServices"/>
            <h4 className="servicesTitle">{__('Services Title 1')}</h4>
                <p className="servicesText">{__('Services Text 1')}</p>
                <p className="servicesText">{__('Services Text 2')}</p>
                <p className="servicesText">{__('Services Text 3')}</p>
                <p className="servicesText">{__('Services Text 4')}</p>
                <p className="servicesText">{__('Services Text 5')}</p>
                <p className="servicesText">{__('Services Text 6')}</p>
                <p className="servicesText">{__('Services Text 7')}</p>
            <div className="twoDiv">
                <div className="firstDiv">
                    <h4 className="servicesTitle">{__('Services Title 2')}</h4>
                    <p className="servicesText2">{__('Services Text 8')}</p>
                    <p className="servicesText2">{__('Services Text 9')}</p>
                    <p className="servicesText2">{__('Services Text 10')}</p>
                    <p className="servicesText2">{__('Services Text 11')}</p>
                    <p className="servicesText2">{__('Services Text 12')}</p>
                    <p className="servicesText2">{__('Services Text 13')}</p>
                </div>
                <div className="secondDiv">
                <iframe 
                    className="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2378.559182495197!2d20.362520448520264!3d44.850088914924875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a667794eb9eb7%3A0xa14c37ed39c36305!2sServantesova%2016%2C%20Beograd!5e0!3m2!1sen!2srs!4v1589664577119!5m2!1sen!2srs"
                    width="60%" 
                    height="250px" 
                    frameBorder="0" 
                    allowFullScreen=""
                    aria-hidden="false" 
                    tabIndex="0"
                    title="mapa"
                />      
                </div>
            </div>
            
            </div>
        <Footer/>  
      </div>
      );
  }

}

export default AboutUs;