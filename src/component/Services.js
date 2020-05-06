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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.637902603797!2d20.459037815181272!3d44.808567579098614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa8da54c451%3A0xe5643e65a4de8733!2zS9GA0LDRmdC40YbQtSDQndCw0YLQsNC70LjRmNC1IDcyLCDQkdC10L7Qs9GA0LDQtCAxMTAwMA!5e0!3m2!1ssr!2srs!4v1588703295361!5m2!1ssr!2srs"
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